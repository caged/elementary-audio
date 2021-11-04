import "./VolumeSlider.svelte.css.proxy.js";
import {
  SvelteComponent,
  add_flush_callback,
  append,
  attr,
  bind,
  binding_callbacks,
  component_subscribe,
  create_component,
  destroy_component,
  detach,
  element,
  init,
  insert,
  mount_component,
  safe_not_equal,
  space,
  svg_element,
  transition_in,
  transition_out
} from "../_snowpack/pkg/svelte/internal.js";
import {gain, powered} from "./store.js";
import Slider from "./Slider.svelte.js";
function create_fragment(ctx) {
  let div;
  let svg0;
  let path0;
  let t0;
  let slider;
  let updating_value;
  let t1;
  let svg1;
  let path1;
  let current;
  function slider_value_binding(value) {
    ctx[2](value);
  }
  let slider_props = {
    min: "0",
    max: "1",
    step: "0.01",
    valueVisible: false,
    disabled: !ctx[0]
  };
  if (ctx[1] !== void 0) {
    slider_props.value = ctx[1];
  }
  slider = new Slider({props: slider_props});
  binding_callbacks.push(() => bind(slider, "value", slider_value_binding));
  return {
    c() {
      div = element("div");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t0 = space();
      create_component(slider.$$.fragment);
      t1 = space();
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      attr(path0, "fill-rule", "evenodd");
      attr(path0, "d", "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z");
      attr(path0, "clip-rule", "evenodd");
      attr(svg0, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg0, "class", "icon svelte-8ykzsl");
      attr(svg0, "viewBox", "0 0 20 20");
      attr(svg0, "fill", "currentColor");
      attr(path1, "fill-rule", "evenodd");
      attr(path1, "d", "M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z");
      attr(path1, "clip-rule", "evenodd");
      attr(svg1, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg1, "class", "icon svelte-8ykzsl");
      attr(svg1, "viewBox", "0 0 20 20");
      attr(svg1, "fill", "currentColor");
      attr(div, "id", "volume");
      attr(div, "class", "svelte-8ykzsl");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, svg0);
      append(svg0, path0);
      append(div, t0);
      mount_component(slider, div, null);
      append(div, t1);
      append(div, svg1);
      append(svg1, path1);
      current = true;
    },
    p(ctx2, [dirty]) {
      const slider_changes = {};
      if (dirty & 1)
        slider_changes.disabled = !ctx2[0];
      if (!updating_value && dirty & 2) {
        updating_value = true;
        slider_changes.value = ctx2[1];
        add_flush_callback(() => updating_value = false);
      }
      slider.$set(slider_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(slider.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(slider.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(slider);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $powered;
  let $gain;
  component_subscribe($$self, powered, ($$value) => $$invalidate(0, $powered = $$value));
  component_subscribe($$self, gain, ($$value) => $$invalidate(1, $gain = $$value));
  function slider_value_binding(value) {
    $gain = value;
    gain.set($gain);
  }
  return [$powered, $gain, slider_value_binding];
}
class VolumeSlider extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export default VolumeSlider;
