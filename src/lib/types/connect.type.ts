import type { ethers } from "ethers";

export type OnSuccess = {
  onSuccess: () => {}
}

export interface IConnectData {
    provider: any,
    userAddress?: string;
    userBalance?: number;
    signer?: any;
    library?: any;
    connected?: boolean;
    chainId?: number;
    network?: any | ethers.providers.Network;
    contractsSDK?: any | ethers.Contract;
    connectWallet?: (({ onSuccess }: OnSuccess) => void) | any;
    disconnectWallet?: (({ onSuccess }: OnSuccess) => void) | any;
}

export interface ICollection {
  collectionId: number;
  name: string;
  description: string;
  creator: string;
  image: string;
}
