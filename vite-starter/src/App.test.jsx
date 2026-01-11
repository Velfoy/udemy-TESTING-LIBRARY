import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { kebabToCamelCase } from "./helpers";
// test("button starts with correct color", () => {
//   render(<App />);
//   const button = screen.getByRole("button", { name: /blue/i });
//   expect(button).toHaveClass("red");
// });
// test("button has correct color and text after click", () => {
//   render(<App />);
//   const button = screen.getByRole("button", { name: /blue/i });
//   fireEvent.click(button);
//   expect(button).toHaveClass("blue");
//   expect(button).toHaveTextContent(/ red/i);
// });
// test("checkbox flow", () => {
//   render(<App />);
//   const buttonElement = screen.getByRole("button", { name: /blue/i });
//   const checkboxElement = screen.getByRole("checkbox", {
//     name: /disable button/i,
//   });
//   expect(buttonElement).toBeEnabled();
//   expect(checkboxElement).not.toBeChecked();
// });
test("button is disabled when checkbox is checked", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /midnight blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveClass("grey");
  expect(buttonElement).toBeDisabled();
  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("medium-violet-red");
});
describe("kebabToCamelCase", () => {
  test("works witn no -", () => {
    expect(kebabToCamelCase("Red")).toBe("Red");
  });
  test("works with one -", () => {
    expect(kebabToCamelCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works with multiple -", () => {
    expect(kebabToCamelCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
