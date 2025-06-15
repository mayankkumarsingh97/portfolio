import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListCard from "./ListCard";

describe("ListCard Component", () => {
  const mockItem = {
    item: {
      heading: "Test Heading",
      subheading: "Test Subheading",
      date: "2025-06-15",
    },
  };

  test("renders heading correctly", () => {
    render(<ListCard {...mockItem} />);
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
  });

  test("renders subheading correctly", () => {
    render(<ListCard {...mockItem} />);
    expect(screen.getByText("Test Subheading")).toBeInTheDocument();
  });

  test("renders date correctly", () => {
    render(<ListCard {...mockItem} />);
    expect(screen.getByText("2025-06-15")).toBeInTheDocument();
  });
});