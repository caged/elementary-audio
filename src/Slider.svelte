<script>
  export let label = null;
  export let min;
  export let max;
  export let value;
  export let step = 1;
  export let disabled = false;
  export let valueVisible = true;
</script>

<div class="slider">
  {#if label}
    <label for={label}>{label}</label>
  {/if}
  <input name={label} type="range" {min} {max} {step} {disabled} bind:value />
  {#if valueVisible}
    <span class="value">{value}</span>
  {/if}
</div>

<style>
  .slider input {
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    background: #ddd;
    height: 6px;
    border-radius: 12px;
  }

  .slider input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 6px;
    height: 12px;
    border-radius: 12px;
    background: hsl(125, 90%, 40%);
    cursor: pointer;
  }

  .slider input::-moz-range-thumb {
    background: hsl(125, 90%, 40%);
    cursor: pointer;
  }

  label {
    display: block;
    font-size: 12px;
    color: #555;
  }

  .value {
    font-family: monospace;
    vertical-align: top;
    color: #555;
  }
</style>
