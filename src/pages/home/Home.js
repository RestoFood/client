import React from "react";
import Hero from "../../components/Hero";
import RestoMenu from "../resto-menu/RestoMenu";
import RestoShop from "../resto-shop/RestoShop";

export default function Home() {
  return (
    <div>
      <Hero />
      <RestoShop />
      <RestoMenu />
    </div>
  );
}
