export default {
  mount: {},
  plugins: ["@snowpack/plugin-svelte"],
  routes: [],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018"
  },
  packageOptions: {
    external: ["events"],
    polyfillNode: false
  },
  devOptions: {},
  buildOptions: {
    baseUrl: "./"
  }
};
