<script lang="ts">
  import { location, push } from "svelte-spa-router";
  import Button from "../Button.svelte";

  // Syntax to update the object dynamically - $location is changing when clicking on tabs
  $: navButtons = [
    {
      className: "nav-marketplace",
      title: "Marketplace",
      isActive: $location === "/marketplace",
      onClick: () => push("/marketplace"),
    },
    {
      className: "nav-create",
      title: "Create",
      isActive: $location === "/create",
      onClick: () => push("/create"),
    },
    {
      className: "nav-collection",
      title: "My Collection",
      isActive: $location.startsWith("/my-collection"),
      onClick: () => push("/my-collection"),
    },
    {
      className: "nav-search",
      title: "Search",
      isActive: false,
      onClick: () => console.log("not implemented"),
    },
  ];
</script>

<div class="navbar-wrapper">
  {#each navButtons as { className, title, isActive, onClick }}
    <Button class={className} {title} {isActive} on:click={onClick} />
  {/each}
</div>

<style>
  .navbar-wrapper {
    display: flex;

    /* @media (max-width: 900px) {
      display: none;
    } */
  }

  .navbar-wrapper :global(.nav-marketplace) {
    width: 110px;
  }

  .navbar-wrapper :global(.nav-search),
  .navbar-wrapper :global(.nav-create) {
    width: 80px;
  }

  .navbar-wrapper :global(.nav-collection) {
    width: 100px;
  }
</style>
