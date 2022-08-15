<script lang="ts">
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import { Header } from "./components";
  import { useInit } from "./lib/hooks/useInit";

  const { connectWallet } = useInit();

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
  <Header />
  <Router {routes} />
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }
</style>
