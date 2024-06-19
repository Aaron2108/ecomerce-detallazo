import React from 'react';
import '../styles/App.css';
import sliderImgImg from '../assets/slider-img.png'; // Asegúrate de que estas rutas son correctas
import sliderImg2 from '../assets/slider-img2.png'; // Agrega más imágenes según sea necesario

const Hero = () => {
  return (
    <section className="slider_section">
      <div className="slider_container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {/* Carousel Item 1 */}
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>Bienvenido a 
                      <br /> "Detallazo"</h1>
                      <p>En Detallazo, estamos dedicados a hacer que cada ocasión sea especial con nuestros exclusivos regalos personalizados. Desde cumpleaños y bodas hasta aniversarios y eventos corporativos, tenemos algo único para cada celebración. ¡Descubre cómo podemos ayudarte a sorprender a tus seres queridos con un regalo que nunca olvidarán!
                      </p>
                      <a href="contact">Contáctanos
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="img-box">
                      <img src={sliderImgImg} alt="Image 1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Item 2 */}
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-7">
                    <div className="detail-box">
                      <h1>Descubre Nuestros 
                      <br /> Regalos Únicos</h1>
                      <p>En PersonalizaTuRegalo, nos enorgullece ofrecer una selección de regalos cuidadosamente elaborados que reflejan la singularidad de cada ocasión y persona. Explora nuestra colección de detalles especiales y encuentra el regalo perfecto que demuestre cuánto te importa.
                      </p>
                      <a href="shop">Comprar Ahora</a>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="img-box">
                      <img src={sliderImg2} alt="Image 2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <img src="images/line.png" alt="" />
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
