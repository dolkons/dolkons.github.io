import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageBreadcrumbs from './PageBreadcrumbs';

describe('PageBreadcrumbs', () => {
  it('renders links to the home page and parent page', () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <PageBreadcrumbs items={[
          { label: 'Итоги года', to: '/years' },
          { label: '2025' },
        ]} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /главная/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Итоги года' })).toHaveAttribute('href', '/years');
    expect(screen.getByText('2025')).toBeInTheDocument();
  });
});
