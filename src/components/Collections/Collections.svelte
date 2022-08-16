<script lang="ts">
  import Collection from "./Collection.svelte";
  import type { ICollection } from "../../lib/types/connect.type";

  export let collections: ICollection[] = [];
</script>

<div class="collections-wrapper" class:isEmpty={!collections.length}>
  {#if collections.length}
    {#each collections as { collectionId, image, name, creator, description }}
      <Collection {collectionId} {image} {name} {creator} {description} />
    {/each}
  {:else}
    <div class="empty">No collections to show</div>
  {/if}
</div>

<style>
  .collections-wrapper.isEmpty {
    display: block;
    padding: 30px 40px 20px;
  }

  .collections-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    padding-top: 10px;
  }

  .empty {
    font-size: 36px;
    text-align: center;
    padding: 40px;
  }

  @media (max-width: 1550px) {
    .collections-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 1150px) {
    .collections-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 850px) {
    .collections-wrapper {
      grid-template-columns: repeat(1, 1fr);
      padding: 30px 0 20px;
    }
  }
</style>
