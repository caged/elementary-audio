<script>
  import Plugin from "./Plugin.svelte";
  import VolumeSlider from "./VolumeSlider.svelte";
  import TransportButton from "./TransportButton.svelte";

  function poweredOn(e) {
    console.log("yep", e);
  }
</script>

<div>
  <Plugin>
    <TransportButton />
    <VolumeSlider />
  </Plugin>
</div>

<style>
</style>
