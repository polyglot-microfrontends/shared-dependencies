/**
 * @type {import('self-hosted-shared-dependencies').BuildOpts}
 */
const config = {
  packages: [
    {
      name: "single-spa",
      versions: ["^5.9.0"],
      include: ["lib/system/**"],
    },
    {
      name: "react",
      versions: ["^17"],
      include: ["umd/**"],
    },
    {
      name: "react-dom",
      versions: ["^17"],
      include: ["umd/**"],
    },
    {
      name: "vue",
      versions: ["^2.6.12"],
      include: ["dist/vue.js", "dist/vue.min.js"],
    },
    {
      name: "vue-router",
      versions: ["^3.4.9"],
      include: ["dist/vue-router.js", "dist/vue-router.min.js"],
    },
    {
      name: "single-spa-angularjs",
      versions: ["^4.1.0"],
      include: ["lib/**"],
    },
  ],
  logLevel: "debug",
  clean: true,
  skipPackagesAtUrl:
    "https://storage.googleapis.com/polyglot.microfrontends.app/npm/",
};

export default config;
