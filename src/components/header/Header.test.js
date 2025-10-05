import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
  test("renders the logo image", () => {
    render(<Header />);
    const logo = screen.getByAltText("Brand Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders navigation links correctly", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("marks 'Home' link as active", () => {
    render(<Header />);
    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveClass("active");
  });

  test("renders 'Hire Me' button", () => {
    render(<Header />);
    expect(screen.getByText("Hire Me")).toBeInTheDocument();
  });
});