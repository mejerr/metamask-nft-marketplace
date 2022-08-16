<script lang="ts">
  import { getContext } from "svelte";
  import { createKey } from "../../lib/helpers/keys";

  let fileUrl = true;
  let name = "";
  let inputName = "";
  let description = "";
  let inputDescription = "";
  const onImageChange = (e: any) => {};
  const onNameChange = (e: any) => {};
  const onDescriptionChange = (e: any) => {};

  const data = getContext(createKey);
</script>

<div class="create-fields-wrapper">
  <div class="title">Required Fields</div>
  <div class="section">Image</div>
  <div class="image-wrapper">
    <input
      class="image-input"
      type="file"
      name="Asset"
      on:change={onImageChange}
    />
    {#if fileUrl}
      <img class="image" alt="uploaded" />
    {:else}
      <div class="empty" />
    {/if}
  </div>

  <div class="section-wrapper">
    <div class="section">Name</div>
    {#if name}
      <div class="input-error">You have to enter name</div>
    {/if}
    <input
      class="name-input"
      type="text"
      placeholder={name}
      value={inputName}
      on:change={onNameChange}
    />
  </div>

  <div class="section-wrapper">
    <div class="section">Description</div>
    {#if description}
      <div class="input-error">You have to enter description</div>
    {/if}
    <textarea
      class="description-textarea"
      placeholder={description}
      value={inputDescription}
      on:change={onDescriptionChange}
    />
  </div>
</div>

<style>
  .create-fields-wrapper {
    min-width: 772px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title {
    font-size: 14px;
    color: rgb(112, 122, 131);
    padding: 20px 20px 0;
    position: relative;
  }

  .title::before {
    position: absolute;
    width: 10px;
    height: 10px;
    left: 10px;
    top: 20px;
    content: " *";
    color: rgb(235, 87, 87);
  }

  .section {
    font-size: 20px;
    font-weight: bold;
    padding: 20px 20px 10px;
    color: inherit;
    position: relative;
  }

  .section::after {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 20px;
    content: "*";
    color: rgb(235, 87, 87);
  }

  .image-wrapper {
    margin: 20px;
    width: 360px;
    height: 260px;

    border: 3px dashed rgb(204, 204, 204);
    padding: 10px;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-wrapper {
    background-color: rgba(55, 55, 55, 0.2);
    transition: background-color 0.3s ease;
  }

  .image-input {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }

  .image {
    width: 340px;
    height: 240px;
    border-radius: 10px;
    flex-shrink: 0;
  }

  .section-wrapper {
    position: relative;
    color: rgb(53, 56, 64);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .name-input,
  .description-textarea {
    font-size: 16px;
    padding: 20px;
    margin: 20px;
    width: calc(100% - 40px);
    border-radius: 10px;
    height: 55px;
    outline: none;
    border: 1px solid rgb(229, 232, 235);
  }

  .description-textarea {
    height: 150px;
  }

  .name-input:focus,
  .description-textarea:focus {
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  }

  .input-error {
    font-size: 12px;
    color: red;
    line-height: 16px;
    margin: 0 20px;
  }

  @media (max-width: 830px) {
    .create-fields-wrapper {
      min-width: 0;
    }
  }

  @media (max-width: 400px) {
    .image-wrapper {
      width: 250px;
    }
  }
</style>
