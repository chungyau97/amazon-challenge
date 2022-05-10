import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="product__star" />
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
