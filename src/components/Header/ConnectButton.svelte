<script lang="ts">
  import { ellipseAddress } from "../../lib/helpers/utilities";

  import Button from "../Button.svelte";

  let connected: boolean = false;
  let userAddress: string = "0x129312312dasdhas0123";
</script>

<div class="connect-btn-wrapper">
  {#if connected && userAddress}
    <div class="account">
      <div class="address" class:connected>
        {ellipseAddress(userAddress, 8)}
      </div>
      <div class="disconnect-btn">Disconnect</div>
    </div>
  {:else}
    <div class="button-wrapper">
      <div class="login">
        <Button class={"login-btn"} title={"Login"} />
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

    /* @media (max-width: 1000px) {
      width: 60px;
      height: 70px;
      justify-content: center;
      }

    @media (max-width: 400px) {
      width: 40px;
      height: 70px;
    } */
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
</style>
