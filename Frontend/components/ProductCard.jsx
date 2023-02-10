import React, { useEffect } from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";
const ProductCard = ({ product, index }) => {
  useEffect(() => {
    if (product) {
      document.getElementsByClassName("pro")[
        index
      ].style.backgroundImage = `url(${urlFor(product.mainImage).url()})`;
    }
  }, []);

  return (
    <div className="pro">
      <Link href={`product/${product.slug.current}`}>
        <div id="msg">
          <h2 className="summer_pro">{product.title}</h2>
          <span className="shop_n animate__slideOutRight">
            Shop Now <i className="fa-solid fa-arrow-right"></i>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
