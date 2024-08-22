import "@testing-library/jest-dom";
import { beforeEach, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TopRestaurants from "../home/topRestaurants/TopRestaurants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import topRestaurantsMock from "../mocks/topRestaurantsMock.json";
import { BrowserRouter } from "react-router-dom";

// Create a new QueryClient instance for each test
const queryClient = new QueryClient();

beforeEach(() => {
  // Mock fetch globally
  global.fetch = vi.fn();
});

it("should render Top Restaurants", async () => {
  // Mock fetch to return a successful response
  global.fetch.mockResolvedValueOnce(
    new Response(JSON.stringify(topRestaurantsMock), { status: 200 })
  );

  render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TopRestaurants />
      </QueryClientProvider>
    </BrowserRouter>
  );

  // Check initial rendering
  await waitFor(() => {
    expect(
      screen.getByText("Top restaurant chains in Delhi")
    ).toBeInTheDocument();
  });

  // Check that restaurant cards are rendered
  expect(screen.getByText("Ghar ka Khana by EatFit")).toBeInTheDocument();
  expect(screen.getByText("Bikanervala")).toBeInTheDocument();

  // Get the search input element
  const searchInput = screen.getByRole("textbox");

  // Set the value of the input to 'Burger'
  fireEvent.change(searchInput, { target: { value: "Burger" } });

  // Wait for the UI to update based on the search input
  await waitFor(() => {
    // Assert that the input value has been updated
    expect(searchInput.value).toBe("Burger");

    // Check if the filtered results are visible or not
    // Adjust based on your actual component's behavior
    expect(
      screen.queryByText("Ghar ka Khana by EatFit")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Bikanervala")).not.toBeInTheDocument();
    // Add any other assertions to match the filtered results
    expect(screen.queryByText("Burger King")).toBeInTheDocument();
    expect(screen.getAllByTestId('res-card').length).toBe(1);
  });
});
