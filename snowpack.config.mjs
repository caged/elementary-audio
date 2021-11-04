/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {},
  plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-webpack"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* */
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
