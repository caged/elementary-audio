import './Application.svelte.css.proxy.js';
/* src/Application.svelte generated by Svelte v3.44.1 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import Plugin from "./Plugin.svelte.js";

function create_fragment(ctx) {
	let div;
	let header;
	let t3;
	let plugin;
	let current;
	plugin = new Plugin({});

	return {
		c() {
			div = element("div");
			header = element("header");

			header.innerHTML = `<h2 class="title svelte-1j0kuix">Unpleasent Noise Maker 3000</h2> 
    <span class="info svelte-1j0kuix">Press play and slowly adjust volume</span>`;

			t3 = space();
			create_component(plugin.$$.fragment);
			attr(header, "class", "svelte-1j0kuix");
			attr(div, "class", "plugin svelte-1j0kuix");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, header);
			append(div, t3);
			mount_component(plugin, div, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(plugin.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(plugin.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(plugin);
		}
	};
}

class Application extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Application;