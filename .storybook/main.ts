/* eslint @typescript-eslint/no-var-requires: 0 */

const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../lib/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true
  },
  features: {
    storyStoreV7: true
  },
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: { '@example': path.resolve(path.dirname(__dirname), 'lib') }
      }
    });
  }
};
