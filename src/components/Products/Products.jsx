import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product/Product";
import styled from "styled-components";

export const Grid = styled.div`

 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: auto;
   
`;

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    axios({
      url: "http://localhost:8080/products",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>
               
    <Grid>
            {/* map through the data and display the cards */}
            {data.map((item) => (
                <Product key={item.id} product={item} />
            ))}
            </Grid>
    
    </div>
    
  );
};

export default Products;
