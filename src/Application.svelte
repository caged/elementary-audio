<script>
  import { onMount } from "svelte";

  import {
    ElementaryWebAudioRenderer as core,
    el,
  } from "@nick-thompson/elementary";

  let loaded = false;

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

  function play() {
    core.render(el.mul(0.3, el.cycle(440)), el.mul(0.3, el.cycle(441)));
  }
</script>

<div>
  <button on:click={play}>play</button>
</div>

<style>
  /* css will go here */
</style>
