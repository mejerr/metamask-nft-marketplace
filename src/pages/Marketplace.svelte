<script lang="ts">
  import { fly } from "svelte/transition";
  import { Collections } from "../components";
  import type { ICollection } from "../lib/types/connect.type";

  let collections: ICollection[] = [
    {
      collectionId: 1,
      name: "lucky clovers",
      description: "lucky clovers description",
      creator: "lucky clovers creator",
      image: "assets/nft-homepage.png",
    },
    {
      collectionId: 2,
      name: "lucky clovers",
      description: "lucky clovers description",
      creator: "lucky clovers creator",
      image: "assets/nft-homepage.png",
    },
  ];
</script>

<div class="marketplace-wrapper" in:fly={{ y: 0, duration: 1000 }}>
  {#if collections.length}
    <div class="title">Explore collections</div>
  {/if}
  <Collections {collections} />
</div>

<style>
  .marketplace-wrapper {
    display: flex;
    margin: 0 auto;
    width: 100%;
    max-width: min(1880px, 100% - 40px);
    justify-content: center;
    flex-direction: column;
  }

  .title {
    width: 100%;
    text-align: center;
    color: black;
    font-size: 24px;
    padding: 60px 20px 60px;
    border-bottom: 1px solid grey;
  }

  @media (max-width: 670px) {
    .title {
      font-size: 20px;
      padding: 40px 20px;
    }
  }
</style>
