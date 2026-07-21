import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts', 'packages/**/*.test.ts'],
    alias: {
      '@atmos/validators': path.resolve(__dirname, './packages/validators/src/index.ts'),
      '@atmos/db': path.resolve(__dirname, './packages/db/src/index.ts'),
      '@atmos/queue': path.resolve(__dirname, './packages/queue/src/index.ts'),
    },
  },
});
