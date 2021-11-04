import { EventEmitter } from "events";
import Application from "./src/Application.svelte";

let app = new Application({
  target: document.body,
});

console.log("i am new");

export default app;
