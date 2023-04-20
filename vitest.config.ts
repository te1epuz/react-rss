import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    coverage: {
      provider: 'c8',
    },
    exclude: [...configDefaults.exclude, './src/mocks/*', './src/redux/*'],
  },
});
