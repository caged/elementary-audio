// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".slider.svelte-totno1 input.svelte-totno1{appearance:none;-webkit-appearance:none;outline:none;background:#ddd;height:6px;border-radius:12px}.slider.svelte-totno1 input.svelte-totno1::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:6px;height:12px;border-radius:12px;background:hsl(125, 90%, 40%);cursor:pointer}.slider.svelte-totno1 input.svelte-totno1::-moz-range-thumb{background:hsl(125, 90%, 40%);cursor:pointer}label.svelte-totno1.svelte-totno1{display:block;font-size:12px;color:#555}.value.svelte-totno1.svelte-totno1{font-family:monospace;vertical-align:top;color:#555}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}