<script>
  import { createEventDispatcher, setContext } from "svelte";
  import {
    ElementaryWebAudioRenderer as core,
    sugar,
  } from "@nick-thompson/elementary";
  import supersaw from "./supersaw";
  import { powered, gain, voices, spread, frequency } from "./store";

  let actx;
  let gainNode;
  let isReady = false;
  let shouldPlay = false;
  const dispatch = createEventDispatcher();

  $: {
    if (isReady && $powered && shouldPlay) {
      const out = sugar(supersaw, {
        voices: $voices,
        spread: $spread,
        frequency: $frequency,
      });
      core.render(out, out);
    }
  }

  core.on("load", (event) => {
    isReady = true;
    dispatch("ready", event);
  });

  gain.subscribe((value) => {
    if (actx) {
      gainNode.gain.value = value;
    }
  });

  powered.subscribe(async (isPowered) => {
    if (isPowered && !actx) {
      console.log("powered on");

      actx = new (window.AudioContext || window.webkitAudioContext)();

      gainNode = actx.createGain();
      gainNode.gain.value = $gain;

      const node = await core.initialize(actx, {
        numberOfInputs: 0,
        numberOfOutputs: 1,
        outputChannelCount: [2],
      });

      node.connect(gainNode);
      gainNode.connect(actx.destination);
      shouldPlay = true;
    } else if (isPowered && actx) {
      console.log("resumed");
      actx.resume();
      shouldPlay = true;
    } else if (!isPowered && actx) {
      console.log("paused");
      shouldPlay = false;
      actx.suspend();
    }
  });
</script>

<div class="plugin">
  <slot />
</div>

<style>
  .plugin {
  }
</style>
