import React from 'react';
import ProductStyled from './styled';

const Product = ({ data }) => {
  if (!data) return <></>;
  console.log(data);
  return (
    <ProductStyled>
      <figure>
        <img src={data.fotos[0].src} />
        <figcaption>{data.nome}</figcaption>
      </figure>
    </ProductStyled>
  );
};

export default Product;
