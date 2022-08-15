<script lang="ts">
  import { push } from "svelte-spa-router";
  import ConnectButton from "./ConnectButton.svelte";
  import NavBar from "./NavBar.svelte";
</script>

<div class="header-wrapper">
  <img
    class="logo"
    src="assets/limeblock-logo.png"
    alt="logo"
    on:click={() => push("/home")}
  />
  <NavBar />
  <div class="title">Limeblock Marketplace</div>
  <ConnectButton />
</div>

<style>
  .header-wrapper {
    position: relative;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 10px;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1;
  }

  .logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    flex-shrink: 0;
    cursor: pointer;
  }

  .title {
    flex: 1;
    display: flex;
    justify-content: center;
    width: 100px;
    color: black;
    font-size: 40px;
    text-align: center;
    cursor: pointer;

    /* @media (max-width: 1000px) {
      font-size: 34px;
    }

    @media (max-width: 670px) {
      font-size: 28px;
    } */
  }
</style>
