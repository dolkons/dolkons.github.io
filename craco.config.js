module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            options: {
              providerImportSource: '@mdx-js/react',
            },
          },
        ],
      });
      return webpackConfig;
    },
  },
}; 