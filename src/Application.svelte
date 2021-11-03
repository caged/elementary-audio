<script>
  import Plugin from "./Plugin.svelte";
  import VolumeSlider from "./VolumeSlider.svelte";
  import TransportButton from "./TransportButton.svelte";
  import Slider from "./Slider.svelte";
</script>

<div class="plugin">
  <Plugin>
    <div class="transport">
      <TransportButton />
      <span class="info">Press play and adjust volume</span>
      <VolumeSlider />
    </div>
    <div class="grid">
      <Slider min="1" max="10" label="Frequency" />
      <Slider min="1" max="10" label="Voices" />
      <Slider min="1" max="10" label="Spread" />
    </div>
  </Plugin>
</div>

<style>
  .plugin {
    width: 600px;
    background-color: #f7f7f7;
    box-sizing: border-box;
  }

  .transport {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px;
    background-color: #eee;
  }
  .info {
    font-size: 12px;
    color: #999;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px;
  }
</style>
