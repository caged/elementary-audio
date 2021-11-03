import { writable } from "svelte/store";

const powered = writable(false);
const gain = writable(0);

export { powered, gain };
