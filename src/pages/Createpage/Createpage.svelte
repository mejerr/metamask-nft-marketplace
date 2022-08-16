<script lang="ts">
  import { setContext } from "svelte";
  import { createKey } from "../../lib/helpers/keys";
  import { uploadPicture } from "../../lib/helpers/utilities";
  import Createblock from "./Createblock.svelte";

  let activeTab: number = 1;
  let nftFileUrl: string = "";
  let collectionFileUrl: string = "";

  const onClick = () => {
    activeTab = activeTab === 1 ? 2 : 1;
  };

  const onUploadPicture = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = await uploadPicture(file);
    activeTab === 1 ? (nftFileUrl = url) : (collectionFileUrl = url);
  };

  setContext(createKey, {
    fileUrl: activeTab === 1 ? nftFileUrl : collectionFileUrl,
    onImageChange: onUploadPicture,
  });
</script>

<div class="create-page-wrapper">
  <div class="create-active-tabs">
    <div class="active-tab" class:active={activeTab === 1} on:click={onClick}>
      New Item
    </div>
    <div class="active-tab" class:active={activeTab === 2} on:click={onClick}>
      New Collection
    </div>
  </div>

  <div class="new-creation-wrapper">
    <Createblock
      header={activeTab === 1 ? "Create New Item" : "Create a Collection"}
    />
  </div>
</div>

<style>
  .create-page-wrapper {
    max-width: min(1280px, 100% - 40px);
    margin: 0 auto;
  }

  .create-active-tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
    width: 100%;
  }

  .active-tab {
    padding: 10px;
    margin: 0 5px;
    width: 150px;
    text-align: center;
    border-radius: 10px;
    color: rgb(112, 122, 131);
    cursor: pointer;
    transition: all 0.5s ease-out;
  }

  .active-tab.active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .active-tab:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .new-creation-wrapper {
    display: block;
    justify-content: center;
    align-items: center;
  }
</style>
