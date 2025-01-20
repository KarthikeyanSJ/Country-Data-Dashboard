import { render, screen } from "@testing-library/react";
import CountryCard from "./CountryCard";

test("renders country card with details", () => {
  render(<CountryCard name="India" region="Asia" flag="flag-url" currentTime="10:00 AM" />);
  expect(screen.getByText(/India/)).toBeInTheDocument();
  expect(screen.getByText(/Asia/)).toBeInTheDocument();
  expect(screen.getByText(/10:00 AM/)).toBeInTheDocument();
});
