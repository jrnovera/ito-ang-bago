// CartPage.js
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import AddToCartButton from "../components/AddtoCart";
import RemoveFromCartButton from "../components/RemoveFromCartButton";

const CartPage = ({ fetchData }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server
    fetch(`http://localhost:4000/cart/get-cart`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Update state with cart items
        setCartItems(data.items || []);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
        // Handle errors if needed
      });
  }, [fetchData]); // Include fetchData in the dependency array

  return (
    <div>
      <h1>Your Cart</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.productId}>
              <td>{item.productId}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>${item.subtotal}</td>
              <td>
                <AddToCartButton
                  productId={item.productId}
                  fetchData={fetchData}
                />
                <RemoveFromCartButton
                  productId={item.productId}
                  fetchData={fetchData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartPage;
