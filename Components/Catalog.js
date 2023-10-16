import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import productsData from '../products.json';
import './Catalog.css'; // Importa los estilos personalizados

function Catalog() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filtra los productos por la categoría "bebidas"
    const filteredProducts = productsData.filter(product => product.category === 'bebidas');
    setProducts(filteredProducts);
  }, [categoryId]);

  return (
    <div className="container mt-5">
      <h2>Catálogo de Bebidas</h2>
      <p className="mb-4">Categoría actual: {categoryId}</p>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img
                src={`/assets/images/product${product.id}.jpg`}
                alt={product.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/item/${product.id}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
