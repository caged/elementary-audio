<script>
  import TransportButton from "./TransportButton.svelte";
  import VolumeSlider from "./VolumeSlider.svelte";
</script>

<div class="plugin">
  <TransportButton />
  <VolumeSlider />
</div>

<style>
  .plugin {
    width: 500px;
    height: 200px;
    background-color: #f7f7f7;
    box-sizing: border-box;
    padding: 10px;
  }
</style>
