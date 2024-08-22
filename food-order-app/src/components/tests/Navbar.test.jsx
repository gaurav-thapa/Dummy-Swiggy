import "@testing-library/jest-dom";
import {  render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { expect, it } from "vitest";
import Navbar from "../Navbar";
import cartStore from '../../util/cartStore';
it("should render Navbar", () => {
  render(
    <BrowserRouter>
      <Provider store={cartStore}>
        <Navbar />
      </Provider>
    </BrowserRouter>
  );
  const homeLink = screen.getByText('Home');
  expect(homeLink).toBeInTheDocument();
});