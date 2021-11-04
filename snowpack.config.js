export default {
  mount: {},
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-webpack"
  ],
  routes: [],
  optimize: {
    bundle: true,
    minify: true,
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
