import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import FeaturedProduct from "../components/FeaturedProduct";
import ProductCatalog from "../components/ProductsCatalog";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const data = {
    title: "GadgetCo.",
    content: "Bringing Innovation to Your Fingertips",
    destination: "/products",
    label: "Buy Now!",
  };

  useEffect(() => {
    // Fetch products from your database/API
    fetch("http://localhost:4000/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Set the fetched products in state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false even on error
      });
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <Banner data={data} />
      <FeaturedProduct />
      <Highlights />
      {loading ? <p>Loading...</p> : <ProductCatalog products={products} />}
    </>
  );
}
