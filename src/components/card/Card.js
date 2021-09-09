import React from "react";
import "./card.scss";
export default function Card({ product }) {
  return (
    <div className="product_card">
      <img className="product_img" src={product.searchImage} />
      <div className="card_body">
        <div className="name">{product.productName}</div>
        <span
          className={`gender ${product.gender === "Men" ? "men" : "women"}`}
        >
          {product.gender}
        </span>
        <span className="price">Rs.{product.price}</span>
        <span className="mrp">Rs.{product.mrp}</span>
      </div>
    </div>
  );
}
