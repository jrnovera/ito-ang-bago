// CartPage.js
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

import CheckoutAndTotalButton from "../components/CheckOutTOTAL";
const CartPage = () => {
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
  }, []); // No need to include fetchData in the dependency array

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
            </tr>
          ))}
        </tbody>
      </Table>
      <CheckoutAndTotalButton cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
