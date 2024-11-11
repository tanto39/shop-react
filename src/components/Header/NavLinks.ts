import React from 'react';

export interface INavLinks {
  link: string;
  title: string
};

export const navLinks: INavLinks[] = [
  { link: '/', title: 'Main Page' },
  { link: '/categories', title: 'Categories' },
  { link: '/products', title: 'All products' },
  { link: '/sales', title: 'All sales' },
]