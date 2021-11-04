/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {},
  plugins: ["@snowpack/plugin-svelte"],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: false,
    minify: false,
    target: "es2020",
    /* */
  },
  packageOptions: {
    polyfillNode: true,
    source: "remote",
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: "./",
  },
};
