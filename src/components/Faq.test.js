import { render } from "@testing-library/react";
import Faq from "./Faq";

test("renders Faq component without crashing", () => {
  render(<Faq />);
});

test("renders all FAQ questions as h4 headings", () => {
  render(<Faq />);
  expect(
    screen.getByText(/What is your design process\?/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/What tools and software do you use for UX design\?/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/How do you measure the success of your UX designs\?/i)
  ).toBeInTheDocument();
});

test("shows correct paragraph for the first FAQ", () => {
  render(<Faq />);
  const paragraph = screen.getByText(
    /My design process typically involves four key phases/i
  );
  expect(paragraph).toBeInTheDocument();
});

test("renders exactly 3 h4 headings and 1 paragraph", () => {
  render(<Faq />);
  const headings = screen.getAllByRole("heading", { level: 4 });
  expect(headings).toHaveLength(3);
  const paragraphs = screen.getAllByText((content, element) => {
    return element.tagName.toLowerCase() === "p";
  });
  expect(paragraphs).toHaveLength(1);
});
