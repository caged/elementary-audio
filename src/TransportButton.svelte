<script>
  import { createEventDispatcher, setContext } from "svelte";
  import { ElementaryWebAudioRenderer as core } from "@nick-thompson/elementary";
  import { gain } from "./store";

  let actx;
  let on = false;
  const dispatch = createEventDispatcher();

  core.on("load", (event) => {
    dispatch("ready", event);
  });

  async function togglePower() {
    on = !on;

    if (on && !actx) {
      actx = new (window.AudioContext || window.webkitAudioContext)();
      const gainNode = actx.createGain();
      gainNode.gain.value = $gain;

      const node = await core.initialize(actx, {
        numberOfInputs: 0,
        numberOfOutputs: 1,
        outputChannelCount: [2],
      });

      node.connect(gainNode);
      dispatch("on", actx);
    } else if (on && actx) {
      actx.resume();
      dispatch("resume", actx);
    } else {
      actx.suspend();
      dispatch("suspend", actx);
    }
  }
</script>

<button on:click={togglePower} class="transport" class:on>
  {#if on}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clip-rule="evenodd"
      />
    </svg>
  {/if}
</button>

<style>
  button {
    cursor: pointer;
    appearance: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
  }

  .transport svg {
    width: 24px;
    height: 24px;
    color: #ccc;
  }

  .transport:hover svg {
    color: #aaa;
  }

  .transport.on svg {
    color: hsl(125, 90%, 40%);
  }
</style>
