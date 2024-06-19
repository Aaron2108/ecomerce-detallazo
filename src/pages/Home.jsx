import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            {/* Example usage of ProductCard component */}
            <ProductCard image="p1.png" title="Ring" price="$200" />
            {/* Repeat ProductCard for other products */}
          </div>
          <div className="btn-box">
            <a href="">View All Products</a>
          </div>
        </div>
      </section>
      {/* Include other sections/components as needed */}
    </div>
  );
}

export default Home;
