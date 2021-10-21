const webpack = require('webpack');
const CreateFiles = require('./plugins/create-files.js');
const eComponentsGenerator = require('./e-components-generator.js');
const componentsStoriesData = eComponentsGenerator.create( process.argv );

module.exports = {
  stories: [
      '../stories/**/*.stories.(js|mdx)',
      '../auto-components/**/*.stories.(js|mdx)'
  ],
  addons: [
      '@storybook/addon-knobs',
      '@storybook/addon-knobs/register',
      './addons/usage/register.js',
      //'@storybook/addon-actions',
      '@storybook/addon-links',
      {
          name: '@storybook/addon-docs',
          options: {
              configureJSX: true,
              babelOptions: {},
              sourceLoaderOptions: null,
          },
      },
  ],
  webpackFinal: config => {
    config.plugins.push(
        new CreateFiles( componentsStoriesData ),
        new webpack.ProvidePlugin( {
            React: 'react',
            PropTypes: 'prop-types',
            jQuery: 'jquery',
            __: ['@wordpress/i18n', '__'],
        } )
    );

    return config;
  },
};