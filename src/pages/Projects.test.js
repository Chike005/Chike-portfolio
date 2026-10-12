import { fireEvent, render, screen } from "@testing-library/react";
import Projects from "./Projects";

jest.mock(
  "react-router-dom",
  () => ({
    Link: ({ to, children, ...props }) =>
      require("react").createElement(
        "a",
        { href: to, ...props },
        children,
      ),
  }),
  { virtual: true },
);

test("filters projects by technology", () => {
  render(<Projects />);

  fireEvent.click(screen.getByRole("button", { name: "React" }));
  expect(screen.getByRole("heading", { name: "ShareBite" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Portfolio Website" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "EcoNuclearHub" }),
  ).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Django" }));
  expect(screen.getByRole("heading", { name: "ShareBite" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "EcoNuclearHub" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "Portfolio Website" }),
  ).not.toBeInTheDocument();
});

test("opens the ShareBite case study and closes it with Escape", () => {
  render(<Projects />);

  fireEvent.click(screen.getByRole("button", { name: "Explore case study" }));
  expect(
    screen.getByRole("dialog", { name: "ShareBite" }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/receivers can reserve donations only after they have been received/i),
  ).toBeInTheDocument();

  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
