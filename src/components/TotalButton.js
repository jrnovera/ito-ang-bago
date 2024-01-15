// TotalButton.js
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TotalButton = ({ cartItems }) => {
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    // Calculate the total based on product subtotal and quantity
    const newTotal = cartItems.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.subtotal * currentItem.quantity,
      0
    );

    setTotal(newTotal);
  };

  return (
    <>
      <Button variant="info" onClick={calculateTotal}>
        Calculate Total
      </Button>
      <p>Total: ${total.toFixed(2)}</p>
    </>
  );
};

export default TotalButton;
