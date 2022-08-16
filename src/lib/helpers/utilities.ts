// import { create as ipfsHttpClient } from 'ipfs-http-client';

// "https://ipfs.infura.io:5001/api/v0"
// const client = create();

export function ellipseAddress(
  address: string = "",
  width: number = 10
): string {
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export const uploadPicture = async (file: string): Promise<string> => {
  let url = "";
  try {
    let client = {
      add: (e: string) => {}
    }
    const added: any = await client.add(file);
    url = `https://ipfs.infura.io/ipfs/${added.path}`;
  } catch (error) {
    console.error("Error uploading file: ", error);
  }

  return url;
};
