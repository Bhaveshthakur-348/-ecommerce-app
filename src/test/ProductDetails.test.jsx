import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

describe("ProductDetails", () => {
  const product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
  };

  test("renders product details correctly when product data is available", async () => {
    render(
      <MemoryRouter initialEntries={[`/product/${product.id}`]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for product details to be rendered
    await waitFor(() => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
      expect(screen.getByText(`${product.rating}`)).toBeInTheDocument();
      expect(screen.getByText(`Brand: ${product.brand}`)).toBeInTheDocument();
      expect(screen.getByText(`Category: ${product.category}`)).toBeInTheDocument();
    });
  });

  test("renders loading state when product data is not available", async () => {
    render(
      <MemoryRouter initialEntries={[`/product/${product.id}`]}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for loading state to be rendered
    expect(screen.getAllByTestId("loading-indicator"))

  });
});
