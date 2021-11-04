export default {
  mount: {},
  plugins: ["@snowpack/plugin-svelte"],
  routes: [],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018"
  },
  packageOptions: {},
  devOptions: {},
  buildOptions: {
    baseUrl: "./"
  }
};
