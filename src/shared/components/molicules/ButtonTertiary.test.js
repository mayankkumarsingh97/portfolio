import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonTertiary from "./ButtonTertiary";

describe("ButtonTertiary Component", () => {
  test("renders the button with provided text", () => {
    render(<ButtonTertiary text="Learn More" />);
    expect(screen.getByText("Learn More")).toBeInTheDocument();
  });

  test("applies correct class name", () => {
    render(<ButtonTertiary text="Learn More" />);
    expect(screen.getByText("Learn More")).toHaveClass("btn-tertiary");
  });
});