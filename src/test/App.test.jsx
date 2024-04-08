import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders header, home page, and product details routes", () => {
    render(
        <App />
    );

    // Check if header is rendered
    expect(screen.getByRole("banner")).toBeInTheDocument();

    // Check if home page route is rendered
    expect(screen.getAllByTestId("product-data"))

    // Check if product details route is rendered
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});


