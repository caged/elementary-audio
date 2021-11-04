export default {
  mount: {},
  plugins: ["@snowpack/plugin-svelte"],
  routes: [],
  optimize: {
    bundle: false,
    minify: false,
    target: "es2020"
  },
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {},
  buildOptions: {
    baseUrl: "./"
  }
};
