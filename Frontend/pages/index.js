import { useState } from "react";
import Blogs from "../components/Blogs";
import FirstGrid from "../components/FirstGrid";
import Footers from "../components/Footers";
import Header from "../components/Header";
import Landing from "../components/Landing";
import NewArival from "../components/NewArival";
import SecondGrid from "../components/SecondGrid";
import { client } from "../lib/client";

export default function Home({ products, categories, heroBanner, shoes }) {
  // console.log(products)
  // console.log(shoes);

  return (
    <>
      <Landing heroBanner={heroBanner} />
      <FirstGrid shoes={shoes}/>
      <SecondGrid />
      <NewArival />
      <Blogs />
    </>
  );
}

export const getServerSideProps = async () => {
  const queryProduct = `*[_type=="product"]{...,categories[]->{title}}`;
  const products = await client.fetch(queryProduct);

  const queryCategory = `*[_type=="category"]`;
  const categories = await client.fetch(queryCategory);

  const queryHeroBanner = `*[_type=="heroBanner"]`;
  const heroBanner = await client.fetch(queryHeroBanner);

  const queryShoes =
    '*[_type=="product" && "Shoes" in categories[]->title]{...,categories[]->{title}}';
  const shoes = await client.fetch(queryShoes);

  return {
    props: { products, categories, heroBanner, shoes },
  };
};
