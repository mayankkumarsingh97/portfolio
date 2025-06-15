import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer Component", () => {
  test("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText("© Rehan Raihan - 2023")).toBeInTheDocument();
  });

  test("renders all social media links", () => {
    render(<Footer />);
    expect(screen.getByText("Dribbble")).toBeInTheDocument();
    expect(screen.getByText("Behance")).toBeInTheDocument();
    expect(screen.getByText("Twitter")).toBeInTheDocument();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
  });

  test("ensures social media links have correct href attributes", () => {
    render(<Footer />);
    expect(screen.getByText("Dribbble")).toHaveAttribute("href", "#Dribbble");
    expect(screen.getByText("Behance")).toHaveAttribute("href", "#Behance");
    expect(screen.getByText("Twitter")).toHaveAttribute("href", "#Twitter");
    expect(screen.getByText("Instagram")).toHaveAttribute("href", "#Instagram");
  });
});