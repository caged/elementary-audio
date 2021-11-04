export default {
  mount: {},
  plugins: [
    "@snowpack/plugin-svelte"
  ],
  routes: [],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017"
  },
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {},
  buildOptions: {
    baseUrl: "./"
  }
};
