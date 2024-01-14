import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

import AddToCartButton from "../components/AddtoCart"; // Placeholder

export default function UsersView({ productData, fetchData }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productRows = productData.map((product) => (
      <tr key={product._id}>
        <td>{product._id}</td>
        <td>{product.name}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>

        <td>
          {/* Placeholder for AddToCartButton */}
          <AddToCartButton productId={product._id} fetchData={fetchData} />
        </td>
      </tr>
    ));

    setProducts(productRows);
  }, [productData, fetchData]);

  return (
    <>
      <h1 className="text-center my-4">User Dashboard</h1>

      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>{products}</tbody>
      </Table>
    </>
  );
}
