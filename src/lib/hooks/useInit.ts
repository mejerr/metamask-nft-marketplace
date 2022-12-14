import { walletConnectStore } from "../../store/wallet";
import type { IConnectData } from "../types/connect.type";
import { ethers } from "ethers";
import ContractsSDK from "../SDK/ContractsSDK";
import { onDestroy } from "svelte";

export const useInit = () => {
  const { ethereum } = window;

  let connectedData: IConnectData = {
    provider: null,
    userAddress: "",
    userBalance: 0,
    signer: null,
    library: null,
    connected: true,
    chainId: 1,
    network: "",
    contractsSDK: {},
    connectWallet: ({ onSuccess = (): void => {} }): void => onSuccess(),
    disconnectWallet: ({ onSuccess = (): void => {} }): void => onSuccess(),
  };

  const changedAccount = async (accounts: string[]) => {
    if (!accounts.length) {
      // Metamask Lock fire an empty accounts array
      await resetApp();
    } else {
      walletConnectStore.update((details) => ({
        ...details,
        connected: true,
        userAddress: accounts[0],
      }));
      window.location.reload();
    }
  };

  const networkChanged = async () => {
    if (connectedData.provider) {
      const connectedLibrary = new ethers.providers.Web3Provider(ethereum);
      const connectedNetwork = await connectedLibrary.getNetwork();

      walletConnectStore.update((details) => ({
        ...details,
        library: connectedLibrary,
        chainId: connectedNetwork.chainId,
        network: connectedNetwork.name,
      }));
    }
  };

  const close = async () => {
    resetApp();
  };

  const unSubscribe = async (provider: any) => {
    // Workaround for metamask widget > 9.0.3 (provider.off is undefined);
    window.location.reload();
    if (!provider.off) {
      return;
    }

    provider.off("accountsChanged", changedAccount);
    provider.off("networkChanged", networkChanged);
    provider.off("close", close);
  };

  const resetApp = async ({ onSuccess = () => {} } = {}) => {
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
    localStorage.removeItem("cachedProvider");

    onSuccess();

    await unSubscribe(ethereum);
  };

  const subscribeToProviderEvents = async (provider: any) => {
    if (!provider.on) {
      return;
    }

    provider.on("accountsChanged", changedAccount);
    provider.on("chainChanged", networkChanged);
    provider.on("disconnect", close);
  };

  const connectWallet = async ({ onSuccess = () => {} } = {}) => {
    if (!localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")) {
      localStorage.setItem("WEB3_CONNECT_CACHED_PROVIDER", "injected");
      localStorage.setItem("cachedProvider", "true");
    }
    connectedData.connected = false;

    await ethereum
    .request({ method: "eth_requestAccounts" })
    .then(async (accountList: any) => {
      const [firstAccount] = accountList;
      const connectedLibrary: any = new ethers.providers.Web3Provider(ethereum);
        const connectedSigner = connectedLibrary.getSigner();

        const connectedData: IConnectData = {
          provider: ethereum,
          userAddress: firstAccount,
          network: (await connectedLibrary.getNetwork()).name,
          userBalance: +ethers.utils.formatEther((await connectedSigner.getBalance()).toString()),
          chainId: await connectedSigner.getChainId(),
          library: connectedLibrary,
          signer: connectedSigner,
          connected: true,
          contractsSDK: new ContractsSDK(connectedSigner, firstAccount),
        };

        await subscribeToProviderEvents(connectedData.provider);

        walletConnectStore.update((details) => ({
          ...details,
          ...connectedData
        }));

        onSuccess();
    })
      .catch((error: any) => {
        connectedData.connected = false;
        // connectWalletError = error;
        localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
        localStorage.removeItem("cachedProvider");
        console.log(error, "error connecting wallet");
      });
  };

  const unsubscribe = walletConnectStore.subscribe((data) => {
    connectedData = data;
    connectedData.connectWallet = ({ onSuccess }: { onSuccess: () => {} }) =>
      connectWallet({ onSuccess });
    connectedData.disconnectWallet = ({ onSuccess }: { onSuccess: () => {} }) =>
      resetApp({ onSuccess });
  });

  onDestroy(unsubscribe);

  return { connectWallet }
}