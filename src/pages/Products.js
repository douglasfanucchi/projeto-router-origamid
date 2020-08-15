import React, { useEffect } from 'react';
import pageStyles from './Pages.module.css';
import Menu from '../components/Menu/index';
import useFetch from '../hooks/useFetch';

const Products = () => {
  const { request, data } = useFetch(
    'https://ranekapi.origamid.dev/json/api/produto',
  );

  useEffect(() => {
    request();
  }, []);

  return (
    <div className={pageStyles.container}>
      <Menu />
    </div>
  );
};

export default Products;
