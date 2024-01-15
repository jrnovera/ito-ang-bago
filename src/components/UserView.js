import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import RemoveItemButton from "./RemoveFromCartButton";
import AddToCartButton from "../components/AddtoCart"; // Placeholder
import ClearCartButton from "./ClearCartButton"; // Placeholder

export default function UsersView({ productData, fetchData }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productCards = productData.map((product) => (
      <ProductCard key={product._id} product={product} fetchData={fetchData} />
    ));

    setProducts(productCards);
  }, [productData, fetchData]);

  return (
    <>
      <h1 className="text-center my-4">User Dashboard</h1>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products}
      </div>

      <div className="text-center mt-3">
        <ClearCartButton />
      </div>
    </>
  );
}

const ProductCard = ({ product, fetchData }) => {
  const { _id, name, description, price } = product;

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>ID: {_id}</Card.Text>
        <Card.Text>Description: {description}</Card.Text>
        <Card.Text>Price: ${price}</Card.Text>
        <div className="text-center">
          <AddToCartButton productId={_id} fetchData={fetchData} />
          <RemoveItemButton productId={_id} fetchData={fetchData} />
        </div>
      </Card.Body>
    </Card>
  );
};
