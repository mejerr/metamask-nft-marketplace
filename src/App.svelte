<script lang="ts">
  import { onMount } from "svelte";
  import { ethers, logger } from "ethers";
  import ContractsSDK from "./lib/SDK/ContractsSDK";
  import Router from "svelte-spa-router";
  import routes from "./routes";

  let connectWalletError: any;
  const { ethereum } = window;

  let provider: any = ethereum;

  let userAddress: string = "";
  let userBalance: number = 0;
  let signer: any = null;
  let library: any = null;
  let connected: boolean = false;
  let chainId: number = 1;
  let network: string = "";
  let contractsSDK: any = null;

  const changedAccount = async (accounts: string[]) => {
    if (!accounts.length) {
      // Metamask Lock fire an empty accounts array
      await resetApp();
    } else {
      connected = true;
      userAddress = accounts[0];
      window.location.reload();
    }
  };

  const networkChanged = async () => {
    if (provider) {
      library = new ethers.providers.Web3Provider(ethereum);
      const connectedNetwork = await library.getNetwork();
      chainId = connectedNetwork.chainId;
      network = connectedNetwork.name;
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

  const resetApp = async (/*{ onSuccess = () => {} } = {}*/) => {
    localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
    localStorage.removeItem("cachedProvider");

    // onSuccess();

    await unSubscribe(ethereum);

    provider = null;
    userAddress = "";
    userBalance = 0;
    signer = null;
    library = null;
    connected = false;
    chainId = 1;
    network = "";
  };

  const subscribeToProviderEvents = async (provider: any) => {
    if (!provider.on) {
      return;
    }

    provider.on("accountsChanged", changedAccount);
    provider.on("chainChanged", networkChanged);
    provider.on("disconnect", close);
  };

  const connectWallet = async () => {
    if (!localStorage.getItem("WEB3_CONNECT_CACHED_PROVIDER")) {
      localStorage.setItem("WEB3_CONNECT_CACHED_PROVIDER", "injected");
      localStorage.setItem("cachedProvider", "true");
    }
    connected = false;

    await ethereum
      .request({ method: "eth_requestAccounts" })
      .then(async (accountList: any) => {
        const [firstAccount] = accountList;
        userAddress = firstAccount;
        connected = true;

        const connectedLibrary: any = new ethers.providers.Web3Provider(
          ethereum
        );
        const connectedSigner = connectedLibrary.getSigner();

        network = (await connectedLibrary.getNetwork()).name;
        userBalance = +ethers.utils.formatEther(
          (await connectedSigner.getBalance()).toString()
        );
        chainId = await connectedSigner.getChainId();
        library = connectedLibrary;
        signer = connectedSigner;
        connected = true;
        contractsSDK = new ContractsSDK(signer, userAddress);

        await subscribeToProviderEvents(provider);
      })
      .catch((error: any) => {
        connected = false;
        connectWalletError = error;
        console.log("error connecting wallet");
      });
  };

  onMount(() => {
    const initConnection = async () => {
      await connectWallet();
    };

    if (localStorage.getItem("cachedProvider")) {
      initConnection();
    }
  });
</script>

<main>
  <Router {routes} />
  <!-- {#if connected}
    <div>
      <span class="dotConnected" />
      Connected Account: {userAddress}
      Connected userBalance: {userBalance}
      Connected chainId: {chainId}
      Connected network: {network}
      <button on:click={resetApp}>Disconnect:</button>
    </div>
  {:else}
    <button class="button buttonMetaMask" on:click={connectWallet}>
      Connect MetaMask
    </button>
  {/if} -->
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  button {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: 1px solid black;
    background: #ff3e00;
    cursor: pointer;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
