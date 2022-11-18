import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import RepositoryList from "../components/RepositoryList/RepositoryList";

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
describe("RepositoryList test", () => {
  test("should match RepositoryList text", () => {
    render(<RepositoryList repositories={[mockRepo]} />);
    expect(
      screen.getByText(/Repo 1/i)
    ).toBeDefined();
  });
});
