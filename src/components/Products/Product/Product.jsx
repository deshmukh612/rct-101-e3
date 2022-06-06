import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = ({product}) => {
  // Note: this id should come from api
  console.log(product)
  // const product = { id: 1 };
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    axios({
      url: "http://localhost:8080/cartItems",
      method: "GET"
  })
  .then((res) => {
    console.log(res.data)
      setCartData(res.data)
  })
  .catch((err) =>{
      console.log(err)
  })

  }, []);
  return (
    <div data-cy={`product-${product.id}`} style={{border: '1px solid black' , margin: "10px"}}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            cartData.count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
