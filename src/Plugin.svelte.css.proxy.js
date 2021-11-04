// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".transport.svelte-13hrttv{display:flex;flex-direction:row;align-items:center;justify-content:space-between;border-bottom:1px solid #e8e8e8;padding:10px 20px;background-color:#eee}.grid.svelte-13hrttv{display:grid;grid-template-columns:1fr 1fr 1fr;padding:20px;gap:10px;justify-content:space-evenly;justify-items:center;align-content:space-evenly;align-items:center}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}