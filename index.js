import EventEmitter from "events";
import Application from "./src/Application.svelte";

const s = new EventEmitter();
console.log(s);
let app = new Application({
  target: document.body,
});

export default app;
