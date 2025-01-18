import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all interfaces
    port: 5173,
  },
  test: {
    include: ['src/**/*.unit.tsx', 'src/**/*.integration.tsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './test_setup/vitest_setup.ts',
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/**/*.unit.tsx', 'src/**/*.integration.tsx'],
    },
  },
});
