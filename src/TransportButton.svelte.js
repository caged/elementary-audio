import "./TransportButton.svelte.css.proxy.js";
import {
  SvelteComponent,
  append,
  attr,
  detach,
  element,
  init,
  insert,
  listen,
  noop,
  safe_not_equal,
  svg_element,
  toggle_class
} from "../_snowpack/pkg/svelte/internal.js";
import {createEventDispatcher, setContext} from "../_snowpack/pkg/svelte.js";
import {ElementaryWebAudioRenderer as core} from "../_snowpack/pkg/@nick-thompson/elementary.js";
import {gain, powered} from "./store.js";
function create_else_block(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "h-5 w-5 svelte-mooze2");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "fill", "currentColor");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_if_block(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z");
      attr(path, "clip-rule", "evenodd");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "class", "h-5 w-5 svelte-mooze2");
      attr(svg, "viewBox", "0 0 20 20");
      attr(svg, "fill", "currentColor");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
    },
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
function create_fragment(ctx) {
  let button;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[0])
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  return {
    c() {
      button = element("button");
      if_block.c();
      attr(button, "class", "transport svelte-mooze2");
      toggle_class(button, "hasPower", ctx[0]);
    },
    m(target, anchor) {
      insert(target, button, anchor);
      if_block.m(button, null);
      if (!mounted) {
        dispose = listen(button, "click", ctx[1]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (current_block_type !== (current_block_type = select_block_type(ctx2, dirty))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(button, null);
        }
      }
      if (dirty & 1) {
        toggle_class(button, "hasPower", ctx2[0]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      if_block.d();
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let hasPower = false;
  const dispatch = createEventDispatcher();
  function toggleTransport() {
    $$invalidate(0, hasPower = !hasPower);
    powered.set(hasPower);
    dispatch("power", hasPower);
  }
  return [hasPower, toggleTransport];
}
class TransportButton extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export default TransportButton;
