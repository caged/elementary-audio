<script>
  import { createEventDispatcher, setContext } from "svelte";
  import { ElementaryWebAudioRenderer as core } from "@nick-thompson/elementary";
  import { gain, powered } from "./store";

  let hasPower = false;
  const dispatch = createEventDispatcher();

  function toggleTransport() {
    hasPower = !hasPower;
    dispatch("power", hasPower);
    powered.set(hasPower);
  }
</script>

<button on:click={toggleTransport} class="transport" class:hasPower>
  {#if hasPower}
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

  .transport.hasPower svg {
    color: hsl(125, 90%, 40%);
  }
</style>
