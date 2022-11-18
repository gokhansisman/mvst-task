import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import UserResultList from "../components/UserResultList/UserResultList";

const mockNode = {
  id: "2",
  name: "test",
  avatarUrl: "testUrl",
  login: "testLogin",
};
const mockUser = {
  node: mockNode,
};
describe("UserResultList test", () => {
  test("should render UserResultList", () => {
    render(<UserResultList userResults={[mockUser]} />);
    expect(screen.getByText(/test/i)).toBeDefined();
  });
});
