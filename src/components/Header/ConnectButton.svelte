<script lang="ts">
  import { push } from "svelte-spa-router";
  import { ellipseAddress } from "../../lib/helpers/utilities";
  import type { OnSuccess } from "../../lib/types/connect.type";
  import { walletConnectStore } from "../../store/wallet";
  import Button from "../Button.svelte";

  $: connected = $walletConnectStore.connected;
  $: userAddress = $walletConnectStore.userAddress;
  $: connectWallet = ({ onSuccess }: OnSuccess) =>
    $walletConnectStore.connectWallet(onSuccess);
  $: disconnectWallet = ({ onSuccess }: OnSuccess) =>
    $walletConnectStore.disconnectWallet({ onSuccess });

  const onLogin = () => {
    connectWallet({ onSuccess: () => push("/marketplace") });
  };

  const onLogout = () => {
    disconnectWallet({ onSuccess: () => push("/home") });
  };
</script>

<div class="connect-btn-wrapper">
  {#if connected && userAddress}
    <div class="account">
      <div class="address" class:connected>
        {ellipseAddress(userAddress, 8)}
      </div>
      <div class="disconnect-btn" on:click={onLogout}>Disconnect</div>
    </div>
  {:else}
    <div class="button-wrapper">
      <div class="login">
        <Button class="login-btn" title={"Login"} on:click={onLogin} />
      </div>
    </div>
  {/if}
</div>

<style>
  .connect-btn-wrapper {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .account {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 10px;
    font-weight: 500;
  }

  .address {
    font-size: 12px;
    font-weight: bold;
  }

  .address.connected {
    margin: -2px auto 0.7em;
  }

  .disconnect-btn {
    font-size: 10px;
    font-family: monospace;
    position: absolute;
    right: 0;
    top: 20px;
    opacity: 0.7;
    cursor: pointer;
  }

  .disconnect-btn:hover {
    opacity: 0.5;
  }

  .button-wrapper {
    background-color: #024bb0;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .login {
    width: 100%;
    height: 100%;
  }

  .login :global(.login-btn) {
    color: #fff;
  }

  .login :global(.login-btn:hover) {
    color: #fff;
  }

  @media (max-width: 1000px) {
    .login :global(.login-btn) {
      width: 60px;
      height: 70px;
      justify-content: center;
    }
  }

  @media (max-width: 400px) {
    .login :global(.login-btn) {
      width: 40px;
      height: 70px;
      justify-content: center;
    }
  }
</style>
