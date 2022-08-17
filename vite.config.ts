import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import sassDts from 'vite-plugin-sass-dts';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.tsx?$/,
      include: '**/*.tsx',
    }),
    dts({
      insertTypesEntry: true,
      include: 'lib',
    }),
  ],
  resolve: {
    alias: {
      '@example': resolve(__dirname, './lib'),
    },
  },
  // css: {
  //   modules: {
  //     localsConvention: 'camelCase',
  //   },
  // },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: '@jordisala1991/storybook',
      fileName: 'storybook',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
