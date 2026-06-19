import Year2025 from './2025.mdx';

export interface YearSummaryItem {
  year: string;
  title: string;
  description: string;
  content: React.ComponentType;
}

export const yearSummaries: YearSummaryItem[] = [
  {
    year: '2025',
    title: 'Итоги 2025',
    description: 'Основные достижения и события года',
    content: Year2025,
  },
];

export const getYearSummary = (year: string) => (
  yearSummaries.find((item) => item.year === year)
);
