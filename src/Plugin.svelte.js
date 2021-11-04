import "./Plugin.svelte.css.proxy.js";
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
  transition_in,
  transition_out
} from "../_snowpack/pkg/svelte/internal.js";
import {createEventDispatcher, setContext} from "../_snowpack/pkg/svelte.js";
import {
  ElementaryWebAudioRenderer as core,
  sugar
} from "../_snowpack/pkg/@nick-thompson/elementary.js";
import VolumeSlider from "./VolumeSlider.svelte.js";
import TransportButton from "./TransportButton.svelte.js";
import Slider from "./Slider.svelte.js";
import supersaw from "./supersaw.js";
import {powered, gain, voices, spread, frequency} from "./store.js";
function create_fragment(ctx) {
  let div2;
  let div0;
  let transportbutton;
  let t0;
  let volumeslider;
  let t1;
  let div1;
  let slider0;
  let updating_value;
  let t2;
  let slider1;
  let updating_value_1;
  let t3;
  let slider2;
  let updating_value_2;
  let current;
  transportbutton = new TransportButton({});
  volumeslider = new VolumeSlider({});
  function slider0_value_binding(value) {
    ctx[6](value);
  }
  let slider0_props = {
    min: "100",
    max: "600",
    label: "Frequency"
  };
  if (ctx[0] !== void 0) {
    slider0_props.value = ctx[0];
  }
  slider0 = new Slider({props: slider0_props});
  binding_callbacks.push(() => bind(slider0, "value", slider0_value_binding));
  function slider1_value_binding(value) {
    ctx[7](value);
  }
  let slider1_props = {min: "1", max: "10", label: "Voices"};
  if (ctx[2] !== void 0) {
    slider1_props.value = ctx[2];
  }
  slider1 = new Slider({props: slider1_props});
  binding_callbacks.push(() => bind(slider1, "value", slider1_value_binding));
  function slider2_value_binding(value) {
    ctx[8](value);
  }
  let slider2_props = {min: "1", max: "20", label: "Spread"};
  if (ctx[1] !== void 0) {
    slider2_props.value = ctx[1];
  }
  slider2 = new Slider({props: slider2_props});
  binding_callbacks.push(() => bind(slider2, "value", slider2_value_binding));
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      create_component(transportbutton.$$.fragment);
      t0 = space();
      create_component(volumeslider.$$.fragment);
      t1 = space();
      div1 = element("div");
      create_component(slider0.$$.fragment);
      t2 = space();
      create_component(slider1.$$.fragment);
      t3 = space();
      create_component(slider2.$$.fragment);
      attr(div0, "class", "transport svelte-13hrttv");
      attr(div1, "class", "grid svelte-13hrttv");
      attr(div2, "class", "plugin");
    },
    m(target, anchor) {
      insert(target, div2, anchor);
      append(div2, div0);
      mount_component(transportbutton, div0, null);
      append(div0, t0);
      mount_component(volumeslider, div0, null);
      append(div2, t1);
      append(div2, div1);
      mount_component(slider0, div1, null);
      append(div1, t2);
      mount_component(slider1, div1, null);
      append(div1, t3);
      mount_component(slider2, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const slider0_changes = {};
      if (!updating_value && dirty & 1) {
        updating_value = true;
        slider0_changes.value = ctx2[0];
        add_flush_callback(() => updating_value = false);
      }
      slider0.$set(slider0_changes);
      const slider1_changes = {};
      if (!updating_value_1 && dirty & 4) {
        updating_value_1 = true;
        slider1_changes.value = ctx2[2];
        add_flush_callback(() => updating_value_1 = false);
      }
      slider1.$set(slider1_changes);
      const slider2_changes = {};
      if (!updating_value_2 && dirty & 2) {
        updating_value_2 = true;
        slider2_changes.value = ctx2[1];
        add_flush_callback(() => updating_value_2 = false);
      }
      slider2.$set(slider2_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(transportbutton.$$.fragment, local);
      transition_in(volumeslider.$$.fragment, local);
      transition_in(slider0.$$.fragment, local);
      transition_in(slider1.$$.fragment, local);
      transition_in(slider2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(transportbutton.$$.fragment, local);
      transition_out(volumeslider.$$.fragment, local);
      transition_out(slider0.$$.fragment, local);
      transition_out(slider1.$$.fragment, local);
      transition_out(slider2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(transportbutton);
      destroy_component(volumeslider);
      destroy_component(slider0);
      destroy_component(slider1);
      destroy_component(slider2);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $frequency;
  let $spread;
  let $voices;
  let $powered;
  let $gain;
  component_subscribe($$self, frequency, ($$value) => $$invalidate(0, $frequency = $$value));
  component_subscribe($$self, spread, ($$value) => $$invalidate(1, $spread = $$value));
  component_subscribe($$self, voices, ($$value) => $$invalidate(2, $voices = $$value));
  component_subscribe($$self, powered, ($$value) => $$invalidate(5, $powered = $$value));
  component_subscribe($$self, gain, ($$value) => $$invalidate(11, $gain = $$value));
  let actx;
  let gainNode;
  let isReady = false;
  let shouldPlay = false;
  const dispatch = createEventDispatcher();
  core.on("load", (event) => {
    $$invalidate(3, isReady = true);
    dispatch("ready", event);
  });
  gain.subscribe((value) => {
    if (actx) {
      gainNode.gain.value = value;
    }
  });
  powered.subscribe(async (isPowered) => {
    if (isPowered && !actx) {
      console.log("powered on cool");
      actx = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = actx.createGain();
      gainNode.gain.value = $gain;
      gainNode.connect(actx.destination);
      const node = await core.initialize(actx, {
        numberOfInputs: 0,
        numberOfOutputs: 1,
        outputChannelCount: [2]
      });
      node.connect(gainNode);
      $$invalidate(4, shouldPlay = true);
    } else if (isPowered && actx) {
      console.log("resumed");
      await actx.resume();
      $$invalidate(4, shouldPlay = true);
    } else if (!isPowered && actx) {
      console.log("paused");
      $$invalidate(4, shouldPlay = false);
      await actx.suspend();
    }
  });
  function slider0_value_binding(value) {
    $frequency = value;
    frequency.set($frequency);
  }
  function slider1_value_binding(value) {
    $voices = value;
    voices.set($voices);
  }
  function slider2_value_binding(value) {
    $spread = value;
    spread.set($spread);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 63) {
      $: {
        if (isReady && $powered && shouldPlay) {
          const out = sugar(supersaw, {
            voices: $voices,
            spread: $spread,
            frequency: $frequency
          });
          core.render(out, out);
        }
      }
    }
  };
  return [
    $frequency,
    $spread,
    $voices,
    isReady,
    shouldPlay,
    $powered,
    slider0_value_binding,
    slider1_value_binding,
    slider2_value_binding
  ];
}
class Plugin extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export default Plugin;
