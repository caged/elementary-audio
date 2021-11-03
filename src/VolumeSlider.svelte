<script>
  import { gain } from "./store";

  function setGain(e) {
    gain.set(e.target.value);
  }
</script>

<input
  type="range"
  min="0"
  max="1"
  step="0.01"
  on:change={setGain}
  bind:value={$gain}
/>
