import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/App.css'; // Importa los estilos globales
import api from '../api';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    api.get('/productos/')
      .then(response => {
        console.log('Products:', response.data); // Debugging line
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>
        <div className="row">
          {products.length > 0 ? (
            products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.imagen_url} // Asegúrate de que imagen_url esté en la respuesta
                title={product.nombre}
                price={` S/.${product.precio}`}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        <div className="btn-box">
          <a href="">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
