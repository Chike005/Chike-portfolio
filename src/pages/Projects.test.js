import { fireEvent, render, screen, within } from "@testing-library/react";
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
  const caseStudy = screen.getByRole("dialog", { name: "ShareBite" });
  expect(caseStudy).toBeInTheDocument();
  expect(
    screen.getByText(/food must be confirmed at its collection point/i),
  ).toBeInTheDocument();
  expect(
    screen.getByText("The challenge"),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Engineering decisions"),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/reservation tests cover early, valid, repeated/i),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /frontend source/i }),
  ).toHaveAttribute("href", "https://github.com/Chike005/Sharebitefrontend");
  expect(
    within(caseStudy).queryByRole("link", { name: /live demo/i }),
  ).not.toBeInTheDocument();

  fireEvent.keyDown(document, { key: "Escape" });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
