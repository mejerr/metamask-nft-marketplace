<script lang="ts">
  import { Button } from "../../components";

  export let header: string = "";
</script>

<div class="create-block-wrapper">
  <div class="header">{header}</div>
  <div class="required-fields" />
  <div class="create-btn">
    <Button title="Create" />
  </div>
</div>

<style>
  .header {
    font-size: 40px;
    font-weight: bold;
    padding: 20px 40px 40px 20px;
  }

  .create-btn {
    position: relative;
    width: 170px;
    text-align: center;
    background-color: #024bb0;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    margin: 0 20px;
    border-radius: 10px;
    border: 1px solid #024bb0;
    cursor: pointer;
  }

  .create-btn:hover {
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
    transition: all 0.2s ease 0s;
  }

  .create-btn :global(.button) {
    color: #fff;
    margin: 0;
    border-radius: 10px;
    width: 170px;
    height: 50px;
  }

  .create-btn :global(.button:hover) {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
