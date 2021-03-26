/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  checkers: ["typescript"],
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  htmlReporter: { baseDir: "reports/mutation" },
  files: [
    "src/**",
    "tests/**",
    "jest.config.js",
    "tsconfig.json"
  ],
  tempDirName: ".stryker-tmp",
  thresholds: { break: 80 },
  testRunner: "jest",
  coverageAnalysis: "perTest",
  tsconfigFile: "tsconfig.json",
  mutate: ["src/**/*.ts"],
  jest: { enableFindRelatedTests: true },
  timeoutMS: 60000,
  timeoutFactor: 4,
};
