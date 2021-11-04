/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {},
  plugins: [
    "@snowpack/plugin-svelte",
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: false,
    target: "es2018",
  },
  packageOptions: {
    polyfillNode: true,
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: "./",
  },
};
