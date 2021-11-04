export default {
  mount: {},
  plugins: ["@snowpack/plugin-svelte"],
  routes: [],
  optimize: {
    bundle: true,
    minify: true
  },
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {},
  buildOptions: {
    baseUrl: "./"
  }
};
