<script>
  import Plugin from "./Plugin.svelte";
</script>

<div class="plugin">
  <header>
    <h2 class="title">Unpleasant Noise Maker 3000</h2>
    <span class="info">Press play and slowly adjust volume</span>
  </header>

  <Plugin />
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0;
    text-align: center;
    background-color: #333;
    color: #fff;
  }
  .title {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.4ch;
  }

  .info {
    font-size: 12px;
    color: #aaa;
  }
  .plugin {
    width: 600px;
    background-color: #f7f7f7;
  }
</style>
