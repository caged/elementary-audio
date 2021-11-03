<script>
  export let label;
  export let min;
  export let max;
  export let value;
</script>

<div>
  <label for={label}>{label}</label>
  <input name={label} type="range" {min} {max} {value} />
</div>

<style>
  label {
    display: block;
    font-size: 12px;
  }
</style>
