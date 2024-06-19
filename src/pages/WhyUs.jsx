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
            <h2>¿POR QUÉ COMPRAR CON NOSOTROS?</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={fastDeliveryImg} alt="Fast Delivery" />
                </div>
                <div className="detail-box">
                  <h5>Entrega Rápida</h5>
                  <p>Servicio de entrega rápido y confiable</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={freeShippingImg} alt="Free Shipping" />
                </div>
                <div className="detail-box">
                  <h5>Envío Gratis</h5>
                  <p>Obtenga envío gratis en todos los pedidos superiores a S/50</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={bestQualityImg} alt="Best Quality" />
                </div>
                <div className="detail-box">
                  <h5>Mejor Calidad</h5>
                  <p>Nuestos productos son sinónimo de calidad</p>
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
