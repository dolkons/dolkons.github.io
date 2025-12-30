module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Находим правило oneOf и добавляем MDX правило в начало
      // Это гарантирует, что MDX файлы будут обработаны правильно до того,
      // как до них дойдет правило для обычных файлов

      const mdxRule = {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            options: {
              providerImportSource: '@mdx-js/react',
            },
          },
        ],
      };

      // Ищем правило с oneOf (обычно это первое правило в CRA)
      const oneOfRule = webpackConfig.module.rules.find(
        (rule) => typeof rule === 'object' && rule.oneOf
      );

      if (oneOfRule) {
        // Добавляем MDX правило в начало oneOf
        oneOfRule.oneOf.unshift(mdxRule);
      } else {
        // Если oneOf не найден, добавляем в начало всех правил
        webpackConfig.module.rules.unshift(mdxRule);
      }

      return webpackConfig;
    },
  },
}; 