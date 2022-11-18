import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";

describe("Header test", () => {
  test("should match header text", () => {
    render(<Header />);
    expect(screen.getByText(/GitHub Repositories With Search Functionality/i)).toBeDefined();
  });
});
