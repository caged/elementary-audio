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
  optimize: {},
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
