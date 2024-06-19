import React from 'react';
import '../styles/App.css';  // Importa los estilos globales
import fastDeliveryImg from '../assets/fast-delivery.png'; // Asegúrate de que estas rutas son correctas
import freeShippingImg from '../assets/free-shipping.png'; // Asegúrate de que estas rutas son correctas
import bestQualityImg from '../assets/best-quality.png'; // Asegúrate de que estas rutas son correctas

const WhyUs = () => {
  return (
    <>
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Shop With Us</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={fastDeliveryImg} alt="Fast Delivery" />
                </div>
                <div className="detail-box">
                  <h5>Fast Delivery</h5>
                  <p>Quick and reliable delivery service available.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={freeShippingImg} alt="Free Shipping" />
                </div>
                <div className="detail-box">
                  <h5>Free Shipping</h5>
                  <p>Get free shipping on all orders over $50.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={bestQualityImg} alt="Best Quality" />
                </div>
                <div className="detail-box">
                  <h5>Best Quality</h5>
                  <p>We offer the best quality products available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
