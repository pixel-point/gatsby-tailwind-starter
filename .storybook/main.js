const path = require('path');

module.exports = {
  stories: ['../src/components/shared/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    // Fix for framer-motion — https://github.com/framer/motion/issues/1307
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/,
    });

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve('babel-plugin-remove-graphql-queries')
    );

    // Adding support for "src" folder resolve so imports like components/shared/button would work
    config.resolve.modules = ['node_modules', path.resolve('src')];

    return config;
  },
};
