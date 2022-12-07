const {mergeConfig} = require('vite');
const path = require('path');

module.exports = {
  "stories": ["../src/**/**/*.stories.mdx", "../src/**/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [ "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/vue3",
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      define: {
        global: "window",
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        }
      }
    });
  },
};
