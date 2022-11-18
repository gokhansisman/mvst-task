import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import RepositoryCard from "../components/RepositoryCard/RepositoryCard";

const mockLanguage = {
  id: "1",
  name: "JavaScript",
};
const mockRepo = {
  id: "1",
  name: "Repo 1",
  url: "URL",
  description: "description",
  updatedAt: new Date(),
  primaryLanguage: mockLanguage,
};
describe("RepositoryCard test", () => {
  test("should match RepositoryCard text", () => {
    render(<RepositoryCard repo={mockRepo} />);
    expect(
      screen.getByText(/Repo 1/i)
    ).toBeDefined();
  });
});
