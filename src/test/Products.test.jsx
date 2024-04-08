import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Products from "../components/Products";

describe("Products", () => {
  const product = {
    id: 1,
    title: "iPhone 9",
    price: 549,
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  };

  test("renders product details correctly", () => {
    render(
      <MemoryRouter>
        <Products product={product} />
      </MemoryRouter>
    );

    const productTitle = screen.getByText(product.title);
    const productPrice = screen.getByText(`$${product.price}`);
    const productImage = screen.getByAltText(product.title);

    expect(productTitle).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute("src", product.thumbnail);
  });

  test("navigates to correct product detail page", () => {
    render(
      <MemoryRouter>
        <Products product={product} />
      </MemoryRouter>
    );

    const productLink = screen.getByText(product.title);
    expect(productLink.closest("a")).toHaveAttribute(
      "href",
      `/product/${product.id}`
    );

    // const productLink = screen.getByRole("link", { name: product.title });
    // expect(productLink).toHaveAttribute("href", `/product/${product.id}`);
  });
});
