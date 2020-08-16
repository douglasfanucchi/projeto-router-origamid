import React from 'react';
import ProductStyled from './styled';
import { useNavigate } from 'react-router-dom';

const Product = ({ data }) => {
  const navigate = useNavigate();

  if (!data) return <></>;

  function handleClick(event) {
    const { id } = data;
    navigate(`/produto/${id}`);
  }

  return (
    <ProductStyled onClick={handleClick}>
      <figure>
        <img src={data.fotos[0].src} />
        <figcaption>{data.nome}</figcaption>
      </figure>
    </ProductStyled>
  );
};

export default Product;
