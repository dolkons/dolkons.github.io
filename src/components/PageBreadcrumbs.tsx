import React from 'react';
import { Breadcrumbs, Link as MuiLink, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[];
}

const PageBreadcrumbs: React.FC<PageBreadcrumbsProps> = ({ items }) => (
  <Breadcrumbs aria-label="Хлебные крошки">
    <MuiLink
      component={RouterLink}
      to="/"
      underline="hover"
      color="inherit"
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <HomeIcon sx={{ mr: 0.5, fontSize: 18 }} />
      Главная
    </MuiLink>

    {items.map((item) => item.to ? (
      <MuiLink
        key={item.to}
        component={RouterLink}
        to={item.to}
        underline="hover"
        color="inherit"
      >
        {item.label}
      </MuiLink>
    ) : (
      <Typography key={item.label} color="text.primary">
        {item.label}
      </Typography>
    ))}
  </Breadcrumbs>
);

export default PageBreadcrumbs;
