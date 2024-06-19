import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="box">
        <a href="">
          <div className="img-box">
            <img src={image} alt={title} />
          </div>
          <div className="detail-box">
            <h6>{title}</h6>
            <h6>
              Precio
              <span>{price}</span>
            </h6>
          </div>
          <div className="new">
            <span>Nuevo</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
