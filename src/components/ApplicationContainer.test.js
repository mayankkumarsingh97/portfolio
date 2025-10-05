import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ApplicationContainer from "./ApplicationContainer";
import { data } from "../mock_data/mock_app_card";

jest.mock("../shared/ApplicationCard", () => ({ item, className }) => (
  <div data-testid="application-card">{item.name}</div>
));

describe("ApplicationContainer Component", () => {
  test("renders the correct number of ApplicationCard components", () => {
    render(<ApplicationContainer />);
    expect(screen.getAllByTestId("application-card")).toHaveLength(data.length);
  });

  test("renders ApplicationCard with correct data", () => {
    render(<ApplicationContainer />);
    data.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
});