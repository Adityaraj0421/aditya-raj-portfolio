import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        findMyGenie: resolve(__dirname, 'work/find-my-genie/index.html'),
        claussal: resolve(__dirname, 'work/claussal/index.html'),
        contentOS: resolve(__dirname, 'work/contentos/index.html'),
        itzConfidential: resolve(__dirname, 'work/itz-confidential/index.html'),
        nakshaStudio: resolve(__dirname, 'work/naksha-studio/index.html'),
      },
    },
  },
});
