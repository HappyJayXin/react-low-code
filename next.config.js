// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system'
]);

module.exports = withTM({
  reactStrictMode: true,
  basePath: '/react-low-code',
  assetPrefix: '.',
  images: {
    loader: 'imgix',
    path: ''
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui-styled-engine-sc'
    };
    return config;
  }
});

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  resolve: {
    alias: {
      '@mui/styled-engine': '@mui-styled-engine-sc'
    }
  }
};
