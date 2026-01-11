import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";
import Button from "react-bootstrap/Button";

export default function OrderEntry({ setPhase }) {
  const { totals } = useOrderDetails();

  const handleOrderClick = () => {
    setPhase("summary");
  };

  return (
    <div className="order-entry">
      <h1>🍨 Design Your Sundae! 🍨</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2 className="grand-total">
        Grand total: {formatCurrency(totals.scoops + totals.toppings)}
      </h2>
      <Button onClick={handleOrderClick}>Order</Button>
    </div>
  );
}
