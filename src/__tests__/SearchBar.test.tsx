import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState } from "react";

describe("SearchBar test", () => {
  test("should match SearchBar text", () => {
    render(<SearchBar onSearch={() => {}} searchType="test" />);
    expect(screen.getByText(/Search/i)).toBeDefined();
  });
});
