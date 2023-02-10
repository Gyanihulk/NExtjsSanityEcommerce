import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

const FirstGrid = ({ shoes }) => {
  useEffect(() => {
    if (shoes) {
      document.getElementsByClassName("heading")[
        0
      ].style.marginBotton="1em";
      document.getElementsByClassName("heading")[
        0
      ].style.marginTop="6em";
    }
  }, []);
  return (
    <>
      <div className="heading">
          <h2 className="cathegory">Shoes</h2>
        </div>
      <div id="grid_f">
        {shoes
          ? shoes.map((product, index) => (
              <ProductCard product={product} key={product.id} index={index} />
            ))
          : "Loading"}
      </div>
    </>
  );
};

export default FirstGrid;
