<script>
  import { createEventDispatcher, setContext } from "svelte";
  import { ElementaryWebAudioRenderer as core } from "@nick-thompson/elementary";
  import { powered, gain } from "./store";

  let actx;
  let gainNode;
  const dispatch = createEventDispatcher();

  core.on("load", (event) => {
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
    } else if (isPowered && actx) {
      console.log("resumed");
      actx.resume();
    } else if (!isPowered && actx) {
      console.log("paused");
      actx.suspend();
    }
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
