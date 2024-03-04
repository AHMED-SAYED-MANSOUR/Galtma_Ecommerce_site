import React, { Component, useEffect, useState } from "react";
import "../ProductsList/products.css";
import Product from "../Product/Product";
const Products = () => {
  const [products, setproducts] = useState([]);
  const [Categories, setcategories] = useState([]);

  const getproducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setproducts(products));
  };
  const GetCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((categories) => setcategories(categories));
  };
  const GetProductsByCat = (cat) => {
    console.log(cat);
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then((response) => response.json())
      .then((responseData) => setproducts(responseData));
  };

  useEffect(() => {
    getproducts();
    GetCategories();
  }, []);

  return (
    <>
      <div className="container">
        <button
          className="btn btn-dark dr"
          onClick={() => {
            getproducts();
          }}
        >
          All
        </button>
        {Categories.map((category) => {
          return (
            <button
              key={category}
              className="btn btn-dark dr"
              onClick={() => {
                GetProductsByCat(category);
              }}
            >
              {category}
            </button>
          );
        })}

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3">
                <Product key={product.id} product={product}></Product>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
