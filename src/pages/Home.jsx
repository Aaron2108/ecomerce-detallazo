import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import '../styles/App.css'; // Asegúrate de que este archivo existe y contiene los estilos globales
import api from '../api'; // Importa la instancia de axios configurada

const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    // Fetch the latest products from the API
    api.get('/productos/')
      .then(response => {
        // Assuming the response is an array of products sorted by date
        const products = response.data;
        const latestThree = products.slice(0, 4); // Get the first 3 products
        setLatestProducts(latestThree);
      })
      .catch(error => {
        console.error('Error fetching latest products:', error);
      });
  }, []);

  return (
    <div>
      <Hero />
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>ÚLTIMOS PRODUCTOS</h2>
          </div>
          <div className="row">
            {latestProducts.length > 0 ? (
              latestProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.imagen_url} // Asegúrate de que imagen_url esté en la respuesta
                  title={product.nombre}
                  price={` S/.${product.precio}`}
                />
              ))
            ) : (
              <p>No hay productos disponibles</p>
            )}
          </div>
          <div className="btn-box">
            <a href="/shop">Ver todos los productos</a>
          </div>
        </div>
      </section>
      {/* Include other sections/components as needed */}
    </div>
  );
}

export default Home;
