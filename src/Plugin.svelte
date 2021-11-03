<script>
  import { setContext } from "svelte";
  import { powered } from "./store";

  powered.subscribe((value) => {
    console.log(value);
  });
</script>

<div class="plugin">
  <slot />
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
