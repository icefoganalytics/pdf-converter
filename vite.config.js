import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [
  ],
  test: {
    globals: true,
    root: ".",
    globalSetup: "./tests/global-setup.js",
    setupFiles: ["./tests/setup.js"],
    // Mocking
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
  },
})
