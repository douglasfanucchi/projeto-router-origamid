import React, { useEffect } from 'react';
import pageStyles from './Pages.module.css';
import Menu from '../components/Menu/index';
import useFetch from '../hooks/useFetch';
import ProductsList from '../components/ProductsList/styled';
import Product from '../components/Product';
import { Helmet } from 'react-helmet';

const Products = () => {
  const { request, data } = useFetch(
    'https://ranekapi.origamid.dev/json/api/produto',
  );

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      <Helmet>
        <title>Products - List</title>
      </Helmet>
      <div className={pageStyles.container}>
        <Menu />
        <ProductsList>
          {data &&
            data.map((product) => <Product key={product.id} data={product} />)}
        </ProductsList>
      </div>
    </>
  );
};

export default Products;
