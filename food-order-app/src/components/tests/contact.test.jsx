import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Contact from "../Contact";

test("should render contact component", () => {
  render(<Contact/>);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

test("should load submit button in contact component", () => {
  render(<Contact/>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});