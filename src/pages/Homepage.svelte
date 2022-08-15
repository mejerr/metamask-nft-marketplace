<script lang="ts">
  import { fade } from "svelte/transition";
  import Button from "../components/Button.svelte";
  import { push } from "svelte-spa-router";
  import { walletConnectStore } from "../store/wallet";
  import type { OnSuccess } from "../lib/types/connect.type";

  $: connected = $walletConnectStore.connected;
  $: connectWallet = ({ onSuccess }: OnSuccess) =>
    $walletConnectStore.connectWallet({ onSuccess });

  const onClick = async (pathname: string) => {
    if (!connected) {
      connectWallet({ onSuccess: () => push(pathname) });
      return;
    }

    push(pathname);
  };
</script>

<div class="homepage-wrapper" transition:fade>
  <div class="homepage-content">
    <div class="left-panel">
      <div class="title">Discover, collect, and sell extraordinary NFTs</div>
      <div class="subtitle">
        LimeBlock is one of the world's first and largest NFT marketplace
      </div>

      <div class="buttons-wrapper">
        <div class="marketplace-btn">
          <Button
            title={"Marketplace"}
            on:click={() => onClick("/marketplace")}
          />
        </div>

        <div class="create-btn">
          <Button title={"Create"} on:click={() => onClick("/create")} />
        </div>
      </div>
    </div>

    <div class="right-panel" />
    <div class="image-wrapper">
      <img
        class="nft-image"
        src={"assets/nft-homepage.png"}
        alt="A man dances."
      />
    </div>
  </div>
</div>

<style>
  .homepage-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
  }

  .homepage-content {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: min(1280px, 100% - 40px);
  }

  .left-panel {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    padding: 70px 20px 0;
  }

  .title {
    font-size: 45px;
    max-width: 100%;
  }

  .subtitle {
    font-size: 24px;
    margin: 20px 0 40px;
    max-width: 400px;
  }

  .buttons-wrapper {
    display: flex;
  }

  .marketplace-btn {
    background-color: #024bb0;
    width: 150px;
    height: 50px;
    margin: 0 10px;
    border-radius: 10px;
    border: 1px solid #024bb0;
  }

  .marketplace-btn :global(.button) {
    width: 100%;
    height: 50px;
    margin: 0;
    border-radius: 10px;
    color: #fff;
  }

  .marketplace-btn:hover {
    background-color: rgba(2, 75, 176, 0.9);
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    color: #fff;
  }

  .create-btn {
    width: 150px;
    height: 50px;
    margin: 0 10px;
    border-radius: 10px;
    border: 1px solid #024bb0;
  }

  .create-btn :global(.button) {
    color: black;
    width: 100%;
    height: 50px;
    margin: 0;
    border-radius: 10px;
  }

  .create-btn :global(.button:hover) {
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    transition: all 0.2s ease 0s;
    color: #024bb0;
  }

  .right-panel {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    padding-top: 50px;
  }

  .image-wrapper {
    width: 550px;
    height: 550px;
    cursor: pointer;
  }

  .nft-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    object-fit: cover;
    flex-shrink: 0;
  }

  @media (max-width: 800px) {
    .homepage-content {
      flex-direction: column;
    }
    .left-panel {
      width: 100%;
      padding: 40px 20px 0;
      align-items: center;
    }

    .title {
      text-align: center;
    }

    .right-panel {
      width: 100%;
      align-items: center;
    }

    @media (max-width: 1300px) {
      .image-wrapper {
        max-width: 550px;
        max-height: 440px;
      }
    }

    @media (max-width: 1100px) {
      .image-wrapper {
        max-width: 460px;
        max-height: 400px;
        margin-top: 30px;
      }
    }

    @media (max-width: 1000px) {
      .image-wrapper {
        max-width: 360px;
        max-height: 370px;
        margin-top: 30px;
      }
    }

    @media (max-width: 420px) {
      .image-wrapper {
        max-width: 280px;
        max-height: 280px;
        margin-top: 20px;
      }
    }
  }
</style>
