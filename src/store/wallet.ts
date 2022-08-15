import { writable, get } from "svelte/store";
import type { IConnectData } from "../lib/types/connect.type";

const { ethereum } = window;

export const walletConnectStore = writable<IConnectData>({
  provider: ethereum,
  userAddress:  "",
  userBalance: 0,
  signer: null,
  library: null,
  connected: false,
  chainId: 1,
  network: "",
  contractsSDK: {},
  connectWallet: ({ onSuccess = (): void => {} }): void => onSuccess(),
  disconnectWallet: ({ onSuccess = (): void => {} }): void => onSuccess()
});