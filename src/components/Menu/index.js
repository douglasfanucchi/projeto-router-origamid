import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from '../MenuItem';

const pages = [
  {
    uri: '/',
    title: 'Produtos',
  },
  {
    uri: '/contato',
    title: 'Contato',
  },
];

const Menu = () => {
  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <MenuItem key={page.uri} page={page} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
