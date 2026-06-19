import { getYearSummary, yearSummaries } from '.';

describe('year summaries', () => {
  it('keeps metadata and content in one catalog', () => {
    expect(yearSummaries).toHaveLength(1);
    expect(getYearSummary('2025')).toMatchObject({
      year: '2025',
      title: 'Итоги 2025',
    });
  });

  it('returns undefined for an unknown year', () => {
    expect(getYearSummary('1900')).toBeUndefined();
  });
});
