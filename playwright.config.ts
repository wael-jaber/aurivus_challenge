import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e_tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html']],
  webServer: {
    command: 'pnpm run dev',
    port: 5173, // Replace with your dev server's port
  },
  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
});
