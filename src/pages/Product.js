import React, { useEffect } from 'react';
import pageStyles from './Pages.module.css';
import productStyles from './Product.module.css';
import Menu from '../components/Menu';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Product = () => {
  const { id } = useParams();
  const { request, data, loading } = useFetch(
    `https://ranekapi.origamid.dev/json/api/produto/${id}`,
  );

  useEffect(() => {
    request();
  }, [id]);

  return (
    <div className={pageStyles.container}>
      <Menu />
      {loading && <p style={{ marginTop: '60px' }}>Carregando...</p>}

      {!loading && data && (
        <section
          className={`${productStyles.singleProduct} ${productStyles.active}`}
        >
          <figure>
            <img src={data.fotos[0].src} />
          </figure>
          <div className={productStyles.productDescription}>
            <h2>{data.nome}</h2>
            <span className={productStyles.price}>R$ {data.preco}</span>
            <p>{data.descricao}</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default Product;
