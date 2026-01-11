import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";
export default function OrderSummary({ setPhase, setOrderNumber }) {
  const { totals, optionCounts } = useOrderDetails();
  const scoopsArray = Object.entries(optionCounts.scoops);
  const scoopList = scoopsArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));
  const toppingsArray = Object.keys(optionCounts.toppings);
  const toppingList = toppingsArray.map((key) => <li key={key}>{key}</li>);
  return (
    <div className="order-summary">
      <h1>Order Summary 🍨</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scoopList}</ul>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingList}</ul>
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <SummaryForm setPhase={setPhase} setOrderNumber={setOrderNumber} />
    </div>
  );
}
