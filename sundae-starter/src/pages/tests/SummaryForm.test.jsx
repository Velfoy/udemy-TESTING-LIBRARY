import SummaryForm from "../summary/SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("button and checkbox functionallity works correctly", async () => {
  const user = userEvent.setup();
  render(<SummaryForm></SummaryForm>);
  const buttonElement = screen.getByRole("button", { name: /confirm order/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).not.toBeChecked();
  await user.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).toBeChecked();
  await user.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).not.toBeChecked();
});
test("popover response to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm></SummaryForm>);
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).toBeInTheDocument();
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
