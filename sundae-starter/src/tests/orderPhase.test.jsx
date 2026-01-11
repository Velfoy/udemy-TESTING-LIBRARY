import { render, screen } from "../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";
test("order phases for happy path", async () => {
  const user = userEvent.setup();
  //render app
  render(<App></App>);
  //add ice cream scoops and toppings
  const subTotal = screen.getByText("Scoops total: $", { exact: false });
  const toppingsSubTotal = screen.getByText("Toppings total: $", {
    exact: false,
  });
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(subTotal).toHaveTextContent("2");
  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });
  await user.click(cherriesCheckbox);
  expect(cherriesCheckbox).toBeChecked();
  expect(toppingsSubTotal).toHaveTextContent("1.5");
  //find and click order button
  const orderButton = screen.getByRole("button", { name: "Order" });
  await user.click(orderButton);
  //check summary information based on order
  const grandTotal = screen.getByText("Grand total: $", { exact: false });
  expect(grandTotal).toHaveTextContent("3.5");
  //accept terms and coditions and click button  to confirm order
  const buttonElement = await screen.findByRole("button", {
    name: /confirm order/i,
  });
  const checkboxElement = await screen.findByRole("checkbox", {
    name: /terms and conditions/i,
  });
  await user.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeEnabled();
  await user.click(buttonElement);
  //confirm order number on confirmation page
  const orderNumber = await screen.findByRole("heading", { name: "Number" });
  expect(orderNumber).toHaveTextContent(/\d/);
  //click "new order" button on confiramtion page
  const newOrder = await screen.findByRole("button", { name: "new_order" });
  await user.click(newOrder);
  const subTotal2 = await screen.findByText("Scoops total: $", {
    exact: false,
  });
  const toppingsSubTotal2 = await screen.findByText("Toppings total: $", {
    exact: false,
  });
  //check that scoops and toppings subtotals have been reset
  expect(subTotal2).toHaveTextContent("0");
  expect(toppingsSubTotal2).toHaveTextContent("0");
  //do we need to await anything to avoid tabs errors
});
