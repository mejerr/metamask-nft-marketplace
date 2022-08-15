<script lang="ts">
  import { push } from "svelte-spa-router";

  import { ellipseAddress } from "../../lib/helpers/utilities";

  export let collectionId: number;
  export let image: string;
  export let name: string;
  export let creator: string;
  export let description: string;

  const onClick = () => {
    push(`/collection/${collectionId}`);
  };
</script>

<div class="collection-wrapper" on:click={onClick}>
  <img class="image" alt="nft" src={image} />
  <div class="small-image-wrapper">
    <img class="small-image" alt="nft" src={image} />
  </div>

  <div class="name">{name}</div>
  <div class="creator">creator <span>{ellipseAddress(creator, 10)}</span></div>
  <div class="description">{description}</div>
</div>

<style>
  .collection-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid rgb(229, 232, 235);
    border-radius: 10px;
    cursor: pointer;
    padding-top: 10px;
  }

  .collection-wrapper:hover {
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    transition: all 0.1s ease 0s;
  }

  .image {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 280px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .small-image-wrapper {
    box-shadow: rgb(14 14 14 / 60%) 0px 0px 2px 0px;
    border: 3px solid rgb(251, 253, 255);

    border-radius: 50%;
    width: 40px;
    height: 40px;
    position: relative;
    top: -20px;
  }

  .small-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .name {
    width: 100%;
    text-align: center;
    font-size: 16px;
    margin-bottom: 5px;
  }

  .creator {
    text-align: center;
    width: 100%;
    font-size: 14px;
    color: rgb(112, 122, 131);
  }

  .creator > span {
    color: rgb(32, 129, 226);
  }

  .description {
    text-align: center;
    margin: 15px 0 15px;
    width: 100%;
    font-size: 16px;
    color: rgb(112, 122, 131);
    max-width: 80%;
    height: 60px;
    word-break: break-all;
    overflow: hidden;
    line-height: 20px;
  }
</style>
