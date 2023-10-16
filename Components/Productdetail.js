import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../products.json';
import './ProductDetail.css'; // Importa los estilos personalizados

function ProductDetail() {
  const { itemId } = useParams();
  const product = productsData.find(product => product.id === parseInt(itemId));

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`/assets/images/product${product.id}.jpg`}
            alt={product.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
