import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Acer B227Q 21.5 Inch IPS Full HD LED Monitor</p>
        <p className="product__price">
          <small>$</small>
          <strong>16,000</strong>
        </p>
        <div className="product__rating">
            <p>🌟</p>
        </div>
      </div>

      <img src="https://m.media-amazon.com/images/I/71p26TxPPjS._AC_UL320_.jpg" alt="" />

      <button>Add to cart</button>
    </div>
  );
}

export default Product;