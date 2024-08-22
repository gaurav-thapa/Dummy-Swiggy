import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { expect, it } from "vitest";
import restaurantCardMock from '../mocks/restaurantCardMock.json'
import RestaurantCard from "../home/topRestaurants/RestaurantCard";
it("should render restaurant card", () => {
  render(
    <BrowserRouter>
      <RestaurantCard res={restaurantCardMock} />
    </BrowserRouter>
  );
  const restroTitle = screen.getByText('Chinese Wok');
  expect(restroTitle).toBeInTheDocument();
});