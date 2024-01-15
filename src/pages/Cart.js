import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import RemoveFromCartButton from "../components/RemoveFromCartButton";
import CheckoutAndTotalButton from "../components/CheckOutTOTAL";
import ClearCartButton from "../components/ClearCartButton";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/cart/get-cart", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching cart items");
      }
    
    const data = await response.json();
      console.log(data);
      setCartItems(data.items || []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      // Handle errors if needed
    }
  };

  useEffect(() => {
    // Initial fetch when component mounts
    fetchData();
  }, []);
console.log(cartItems);


  return (
    <div>
      <h1>Your Cart</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.productName}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.subtotal}</td>
              <td>
                <RemoveFromCartButton
                  productId={item._id}
                  fetchData={fetchData}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CheckoutAndTotalButton cartItems={cartItems} />
    </div>
  );
};

export default CartPage;