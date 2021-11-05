<script>
  import { createEventDispatcher, setContext, onMount } from "svelte";
  import {
    ElementaryWebAudioRenderer as core,
    sugar,
  } from "@nick-thompson/elementary";
  import VolumeSlider from "./VolumeSlider.svelte";
  import TransportButton from "./TransportButton.svelte";
  import Slider from "./Slider.svelte";
  import supersaw from "./supersaw";
  import { powered, gain, voices, spread, frequency } from "./store";

  let actx;
  let gainNode;
  let isReady = false;
  let shouldPlay = false;
  const dispatch = createEventDispatcher();

  core.on("load", (event) => {
    console.log("ready");
    isReady = true;
    dispatch("ready", event);
  });

  onMount(async () => {
    actx = new (window.AudioContext || window.webkitAudioContext)();

    gainNode = actx.createGain();
    gainNode.gain.value = $gain;
    gainNode.connect(actx.destination);

    const node = await core.initialize(actx, {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
    });

    setTimeout(() => {
      node.connect(gainNode);
      console.log("timeout fired");
    }, 100);
  });

  gain.subscribe((value) => {
    if (actx) {
      gainNode.gain.value = value;
    }
  });

  powered.subscribe(async (isPowered) => {
    if (isPowered && !actx) {
      console.log("powered on");
      shouldPlay = true;
    } else if (isPowered && actx) {
      console.log("resumed");
      await actx.resume();
      shouldPlay = true;
    } else if (!isPowered && actx) {
      console.log("paused");
      shouldPlay = false;
      await actx.suspend();
    }
  });

  $: if (isReady && $powered && shouldPlay) {
    const out = sugar(supersaw, {
      voices: $voices,
      spread: $spread,
      frequency: $frequency,
    });
    core.render(out, out);
  }
</script>

<div class="plugin">
  <div class="transport">
    <TransportButton />
    <VolumeSlider />
  </div>
  <div class="grid">
    <Slider min="100" max="600" label="Frequency" bind:value={$frequency} />
    <Slider min="1" max="10" label="Voices" bind:value={$voices} />
    <Slider min="1" max="20" label="Spread" bind:value={$spread} />
  </div>
</div>

<style>
  .transport {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px 20px;
    background-color: #eee;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px;
    gap: 10px;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
  }
</style>
