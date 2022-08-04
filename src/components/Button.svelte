<script lang="ts">
  export let title: string = "";
  export let arrow: boolean = false;
  export const isActive: boolean = false;
</script>

<div class="button" class:active={"isActive"} on:click>
  {#if title}
    <div class="title">{title}</div>
  {/if}

  {#if arrow}
    <div class="arrow-icon">{arrow}</div>
  {/if}
</div>

<style>
  .button {
    display: flex;
    position: relative;
    margin-right: 5px;
    margin-left: 5px;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    font-family: "Popins, sans-serif";
    font-weight: 600;
    transition-property: border-bottom;
    transition-duration: 0.3s;
    color: rgba("0, 0, 0, 0.6");
  }

  .button.active {
    border-bottom: 3px solid #024bb0;
  }

  .button:hover {
    color: "rgba(0, 0, 0, 0.8)";
    cursor: pointer;
  }

  .button.active:hover {
    color: "black";
  }

  .title {
    font-size: 16px;
  }

  .arrow-icon {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 20px;
  }
</style>
