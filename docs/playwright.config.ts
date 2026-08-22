// Copyright (c) Zosei
// MIT License

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/playwright",
  // fullyParallel: true,
  workers: 1,
  // retries: 3,
  // failOnFlakyTests: false,
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 0,
  // workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "http://localhost:4321/",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Desktop Firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
  timeout: 30000,
  webServer: {
    command: "npx sirv-cli dist --port 4321",
    url: "http://localhost:4321/",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
    stdout: "ignore",
    stderr: "pipe",
  },
});
