import React, { Component, Link } from "react";
import "../Product/product.css";
const Product = (props) => {
  const { product } = props;

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={product.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.description}
          </p>
          <p className="card-text">
            <small className="text-muted">Price: {product.price}</small>
          </p>
          <button className="btn btn-warning">Check this product</button>
        </div>
      </div>
    </>
  );
};

export default Product;
