import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListCardContainer from "./ListCardContainer";
import { listCard } from "../mock_data/mock_list_card";

jest.mock("./ListCard", () => ({ item }) => (
  <div data-testid="list-card">{item.heading}</div>
));

describe("ListCardContainer Component", () => {
  test("renders the correct number of ListCard components", () => {
    render(<ListCardContainer />);
    expect(screen.getAllByTestId("list-card")).toHaveLength(listCard.length);
  });

  test("renders ListCard with correct data", () => {
    render(<ListCardContainer />);
    listCard.forEach((item) => {
      expect(screen.getByText(item.heading)).toBeInTheDocument();
    });
  });
});