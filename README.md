# dolkons.ru

Персональный сайт Кости Долгого: главная страница, жизненные принципы и ежегодные итоги.

## Стек

- React 18 и TypeScript
- Material UI
- React Router с hash-навигацией
- MDX для публикаций
- CRACO / Create React App

## Локальный запуск

Требуется Node.js 20.

```bash
npm ci
npm start
```

Сайт откроется на `http://localhost:3000`.

## Проверки

```bash
npm run typecheck
npm run lint
npm run test:ci
npm run build
```

## Как добавить итоги нового года

1. Создайте файл `src/content/years/<год>.mdx`.
2. Импортируйте его и добавьте метаданные в `src/content/years/index.ts`.

Список годов и страница публикации используют один каталог метаданных.

## Публикация

Push в ветку `master` запускает GitHub Actions. Workflow проверяет типы, lint и тесты, собирает сайт и публикует каталог `build` в Yandex Object Storage.
