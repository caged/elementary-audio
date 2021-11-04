// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "header.svelte-sxt8ly{display:flex;justify-content:space-between;align-items:center;padding:20px;margin:0;text-align:center;background-color:#444;color:#fff}.title.svelte-sxt8ly{margin:0;padding:0;text-transform:uppercase;font-size:14px;letter-spacing:0.4ch}.info.svelte-sxt8ly{font-size:12px;color:#aaa}.plugin.svelte-sxt8ly{width:600px;background-color:#f7f7f7}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}