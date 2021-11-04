export default {
  mount: {},
  plugins: [
    "@snowpack/plugin-svelte"
  ],
  routes: [],
  optimize: {
    bundle: true,
    target: "es2018"
  },
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {},
  buildOptions: {
    baseUrl: "./"
  }
};
