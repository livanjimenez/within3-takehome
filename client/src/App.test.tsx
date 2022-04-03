import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders SpaceX Missions!", () => {
  render(<App />);
  const linkElement = screen.getByText("SpaceX Missions!");
  expect(linkElement).toBeInTheDocument();
});
