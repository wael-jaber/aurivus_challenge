import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/aurivus_challenge/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: 5173,
  },
  // @ts-expect-error : this is just wrong tying from vite.
  test: {
    include: ['src/**/*.unit.{ts,tsx}', 'src/**/*.integration.{ts,tsx}'], // Include both .ts and .tsx files
    globals: true,
    environment: 'jsdom',
    setupFiles: './test_setup/vitest_setup.ts',

    coverage: {
      provider: 'istanbul',
      reportsDirectory: './coverage',
      reporter: ['text', 'lcov', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'], // Include all TS and TSX files in src
      exclude: ['src/**/test_utils/*'], // Exclude only utility files
    },
  },
});
