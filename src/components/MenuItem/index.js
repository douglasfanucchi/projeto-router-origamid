import React from 'react';
import MenuItemStyled from './styled';

const MenuItem = ({ page }) => {
  return <MenuItemStyled to={page.uri}>{page.title}</MenuItemStyled>;
};

export default MenuItem;
