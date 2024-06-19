import React from 'react';
import '../styles/App.css'; // Asegúrate de que este archivo CSS existe y contiene los estilos necesarios

const Footer = () => {
  return (
    <section className="info_section layout_padding2-top">
      <div className="social_container">
        <div className="social_box">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="info_container">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <h6>SOBRE NOSOTROS</h6>
              <p>En Detallazo, nos especializamos en crear regalos únicos y personalizados para cada ocasión especial.
                Desde cumpleaños y bodas hasta aniversarios y eventos corporativos, cada detalle es cuidadosamente seleccionado
                para reflejar la personalidad y el estilo de nuestros clientes. Nos apasiona transformar tus ideas en recuerdos
                inolvidables que tus seres queridos apreciarán para siempre.</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="info_form">
                <h6>BOLETÍN INFORMATIVO</h6>
                <form action="#">
                  <input type="email" placeholder="Ingresa tu email" />
                  <button type="submit">Suscríbete</button>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>¿NECESITAS AYUDA?</h6>
              <p>
                Nuestro equipo está aquí para asistirte. Si tienes alguna pregunta sobre nuestros productos o necesitas ayuda con tu pedido,
                no dudes en contactarnos. Estamos comprometidos en hacer que tu experiencia con nosotros sea tan personalizada y especial como
                los regalos que ofrecemos.              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6>CONTÁCTANOS</h6>
              <div className="info_link-box">
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Ca. Pedro Paulet 475</span>
                </a>
                <a href="#">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>+51 902 362 856</span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>detallazope@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> Todos los derechos reservados por
            <a href="https://html.design/"> @Detallazo</a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
