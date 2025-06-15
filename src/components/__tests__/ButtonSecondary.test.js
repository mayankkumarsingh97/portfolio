import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonSecondary from "../molicules/ButtonSecondary";

describe("ButtonSecondary Component", () => {
  test("renders the button with provided text", () => {
    render(<ButtonSecondary text="Submit" />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("calls onClick function when button is clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonSecondary text="Submit" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("disables the button when disabled prop is true", () => {
    render(<ButtonSecondary text="Submit" disabled />);
    expect(screen.getByText("Submit")).toBeDisabled();
  });

  test("displays loading indicator when loading prop is true", () => {
    render(<ButtonSecondary text="Submit" loading />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("applies custom class name", () => {
    render(<ButtonSecondary text="Submit" className="custom-class" />);
    expect(screen.getByText("Submit")).toHaveClass("custom-class");
  });
});