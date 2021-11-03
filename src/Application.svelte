<script>
  import { onMount } from "svelte";

  import {
    ElementaryWebAudioRenderer as core,
    sugar,
  } from "@nick-thompson/elementary";
  import supersaw from "./supersaw";

  let loaded = false;

  let voices = 3;
  let spread = 5;
  let frequency = 300;

  onMount(async () => {
    const actx = new (window.AudioContext || window.webkitAudioContext)();
    const node = await core.initialize(actx, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });

    node.connect(actx.destination);
  });

  core.on("load", () => (loaded = true));

  function render() {
    const out = sugar(supersaw, { voices, spread, frequency });
    core.render(out, out);
  }
</script>

<div class="form">
  <label for="frequency">Frequency</label>
  <input
    bind:value={frequency}
    on:change={render}
    type="range"
    min="5"
    max="500"
    step="1"
    class="range"
  />
  <span class="val">{frequency}</span>
  <label for="voices">Voices</label>
  <input
    bind:value={voices}
    on:change={render}
    type="range"
    min="1"
    max="10"
    step="1"
    class="range"
  />
  <span class="val">{voices}</span>

  <label for="spread">Spread</label>
  <input
    bind:value={spread}
    on:change={render}
    type="range"
    min="1"
    max="10"
    step="1"
    class="range"
  />
  <span class="val">{spread}</span>
</div>
<button on:click={render}>Play</button>

<style>
  .range {
    width: 300px;
  }

  div.form {
    padding: 20px;
    display: grid;
    grid-template-columns: max-content max-content max-content;
    grid-gap: 20px;
  }
  div.form label {
    text-align: right;
    font-weight: bold;
  }

  .val {
    font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
      "Roboto Mono", "Courier New", monospace;
    color: #333;
  }
</style>
