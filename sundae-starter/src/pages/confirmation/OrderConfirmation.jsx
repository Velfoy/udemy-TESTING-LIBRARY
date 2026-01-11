import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function OrderConfirmation({ setPhase, orderNumber }) {
  const { resetOrder } = useOrderDetails();

  const handleNewOrder = () => {
    resetOrder();
    setPhase("entry");
  };

  return (
    <div className="order-confirmation">
      <h1>Thank You!</h1>
      <h2 aria-label="Number">Number: {orderNumber}</h2>
      <p>As requested, nothing will be delivered</p>
      <Button onClick={handleNewOrder} name="new_order">
        new_order
      </Button>
    </div>
  );
}
