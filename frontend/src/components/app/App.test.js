import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const h2Element = screen.getByText(/Data files/i);
  expect(h2Element).toBeInTheDocument();
});
