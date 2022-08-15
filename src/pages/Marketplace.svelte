<script>
  import { fade, fly } from "svelte/transition";
</script>

<div class="marketplace-wrapper" in:fly={{ y: 0, duration: 1000 }}>
  <div class="title">Explore collections</div>
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
