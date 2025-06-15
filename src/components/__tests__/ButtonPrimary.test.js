import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonPrimary from "../molicules/ButtonPrimary";

describe("ButtonPrimary Component", () => {
  test("renders the button with provided text", () => {
    render(<ButtonPrimary text="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick function when button is clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonPrimary text="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("disables the button when disabled prop is true", () => {
    render(<ButtonPrimary text="Click Me" disabled />);
    expect(screen.getByText("Click Me")).toBeDisabled();
  });

  test("displays loading indicator when loading prop is true", () => {
    render(<ButtonPrimary text="Click Me" loading />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    render(<ButtonPrimary text="Click Me" className="custom-class" />);
    expect(screen.getByText("Click Me")).toHaveClass("custom-class");
  });
});