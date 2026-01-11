import Container from "react-bootstrap/Container";
import OrderEntry from "./pages/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import "./App.css";
import { useState } from "react";
import OrderSummary from "./pages/summary/OrderSummary";
import OrderConfirmation from "./pages/confirmation/OrderConfirmation";

function App() {
  const [phase, setPhase] = useState("entry");
  const [orderNumber, setOrderNumber] = useState(null);

  return (
    <Container className="app-container">
      <OrderDetailsProvider>
        {phase === "entry" && <OrderEntry setPhase={setPhase} />}
        {phase === "summary" && (
          <OrderSummary setPhase={setPhase} setOrderNumber={setOrderNumber} />
        )}
        {phase === "confirmation" && (
          <OrderConfirmation setPhase={setPhase} orderNumber={orderNumber} />
        )}
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
