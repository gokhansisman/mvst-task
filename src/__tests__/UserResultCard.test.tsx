import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import UserResultCard from "../components/UserResultCard/UserResultCard";

const mockNode = {
  id: "2",
  name: "test",
  avatarUrl: "testUrl",
  login: "testLogin",
};
const mockUser = {
  node: mockNode,
};
describe("UserResultCard test", () => {
  test("should render UserResultCard", () => {
    render(<UserResultCard user={mockUser} />);
    expect(
      screen.getByText(/test/i)
    ).toBeDefined();
  });
});
