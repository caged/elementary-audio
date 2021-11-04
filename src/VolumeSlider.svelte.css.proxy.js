// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#volume.svelte-8ykzsl{display:inline-flex;align-items:center;gap:5px}.icon.svelte-8ykzsl{width:12px;height:12px;color:#999;margin-top:4px}#volume.svelte-8ykzsl .slider input{background-color:#999 !important}#volume.svelte-8ykzsl .slider input::-webkit-slider-thumb{background-color:#444 !important}#volume.svelte-8ykzsl .slider input::-moz-slider-thumb{background-color:#444 !important}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}