import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react({
      exclude: /\.stories\.tsx?$/,
      include: '**/*.tsx',
      jsxRuntime: 'classic'
    }),
    dts({
      insertTypesEntry: true,
      include: 'lib'
    })
  ],
  resolve: {
    alias: {
      '@example': resolve(__dirname, './lib')
    }
  },
  build: {
    minify: false,
    sourcemap: true,
    lib: {
      entry: 'lib/main.ts',
      formats: ['es'],
      name: '@jordisala1991/storybook',
      fileName: '[name]'
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@stitches/react'],
      treeshake: false,
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
        inlineDynamicImports: false,
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          '@stitches/react': '@stitches/react'
        }
      }
    }
  }
});
