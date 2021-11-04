import "./Slider.svelte.css.proxy.js";
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
  run_all,
  safe_not_equal,
  set_data,
  set_input_value,
  space,
  text,
  to_number
} from "../_snowpack/pkg/svelte/internal.js";
function create_if_block_1(ctx) {
  let label_1;
  let t;
  return {
    c() {
      label_1 = element("label");
      t = text(ctx[1]);
      attr(label_1, "for", ctx[1]);
      attr(label_1, "class", "svelte-totno1");
    },
    m(target, anchor) {
      insert(target, label_1, anchor);
      append(label_1, t);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t, ctx2[1]);
      if (dirty & 2) {
        attr(label_1, "for", ctx2[1]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(label_1);
    }
  };
}
function create_if_block(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text(ctx[0]);
      attr(span, "class", "value svelte-totno1");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let t0;
  let input;
  let t1;
  let mounted;
  let dispose;
  let if_block0 = ctx[1] && create_if_block_1(ctx);
  let if_block1 = ctx[6] && create_if_block(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      input = element("input");
      t1 = space();
      if (if_block1)
        if_block1.c();
      attr(input, "name", ctx[1]);
      attr(input, "type", "range");
      attr(input, "min", ctx[2]);
      attr(input, "max", ctx[3]);
      attr(input, "step", ctx[4]);
      input.disabled = ctx[5];
      attr(input, "class", "svelte-totno1");
      attr(div, "class", "slider svelte-totno1");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append(div, t0);
      append(div, input);
      set_input_value(input, ctx[0]);
      append(div, t1);
      if (if_block1)
        if_block1.m(div, null);
      if (!mounted) {
        dispose = [
          listen(input, "change", ctx[7]),
          listen(input, "input", ctx[7])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1(ctx2);
          if_block0.c();
          if_block0.m(div, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty & 2) {
        attr(input, "name", ctx2[1]);
      }
      if (dirty & 4) {
        attr(input, "min", ctx2[2]);
      }
      if (dirty & 8) {
        attr(input, "max", ctx2[3]);
      }
      if (dirty & 16) {
        attr(input, "step", ctx2[4]);
      }
      if (dirty & 32) {
        input.disabled = ctx2[5];
      }
      if (dirty & 1) {
        set_input_value(input, ctx2[0]);
      }
      if (ctx2[6]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let {label = null} = $$props;
  let {min} = $$props;
  let {max} = $$props;
  let {value} = $$props;
  let {step = 1} = $$props;
  let {disabled = false} = $$props;
  let {valueVisible = true} = $$props;
  function input_change_input_handler() {
    value = to_number(this.value);
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("label" in $$props2)
      $$invalidate(1, label = $$props2.label);
    if ("min" in $$props2)
      $$invalidate(2, min = $$props2.min);
    if ("max" in $$props2)
      $$invalidate(3, max = $$props2.max);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("step" in $$props2)
      $$invalidate(4, step = $$props2.step);
    if ("disabled" in $$props2)
      $$invalidate(5, disabled = $$props2.disabled);
    if ("valueVisible" in $$props2)
      $$invalidate(6, valueVisible = $$props2.valueVisible);
  };
  return [
    value,
    label,
    min,
    max,
    step,
    disabled,
    valueVisible,
    input_change_input_handler
  ];
}
class Slider extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      label: 1,
      min: 2,
      max: 3,
      value: 0,
      step: 4,
      disabled: 5,
      valueVisible: 6
    });
  }
}
export default Slider;
