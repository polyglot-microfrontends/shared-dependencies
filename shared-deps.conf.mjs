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
  ],
  logLevel: "debug",
  clean: true,
  skipPackagesAtUrl:
    "https://storage.googleapis.com/polyglot.microforntends.app/npm/",
};

export default config;
