import React, { useEffect } from "react";
import { client, urlFor } from "../lib/client";

const Landing = ({heroBanner}) => {
//  console.log(heroBanner)
useEffect(()=>{
  if(heroBanner){
    document.getElementById("banner").style.backgroundImage=`url(${urlFor(heroBanner[0]?.mainImage)})`
  }

},[])
  return (heroBanner?
    <div id="page_banner">
      <div id="banner">
        <div id="msg_box">
          <p className="summer_s">{heroBanner[0]?.smallText}</p>
          <h1 id="seventy_p">{heroBanner[0]?.largeText}</h1>
          <p className="promo_c">{heroBanner[0]?.promoCode}</p>
          <button
            id="shop_now"
            type="submit"
            name="shop now"
            onclick="change()"
          >
            Shop now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>:""
  );
};



export default Landing;
