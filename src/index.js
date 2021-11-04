import EventEmitter from "events";
import Application from "./Application.svelte";

const a = new EventEmitter();
console.log(a);
let app = new Application({
  target: document.body,
});

export default app;
