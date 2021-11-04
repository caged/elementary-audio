import { writable } from "../_snowpack/pkg/svelte/store.js";

const powered = writable(false);
const gain = writable(0);
const voices = writable(6);
const spread = writable(10);
const frequency = writable(400);

export { powered, gain, voices, spread, frequency };
