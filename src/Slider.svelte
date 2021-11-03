<script>
  export let label;
  export let min;
  export let max;
  export let value;
</script>

<div class="slider">
  <label for={label}>{label}</label>
  <input name={label} type="range" {min} {max} bind:value />
  <span class="value">{value}</span>
</div>

<style>
  .slider input {
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    background: #ddd;
    height: 6px;
    border-radius: 10px;
  }

  .slider input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border-radius: 10px;
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
