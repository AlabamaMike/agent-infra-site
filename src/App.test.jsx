import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import App from "./App";

function renderAt(route) {
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe("microsite routing", () => {
  it("renders the overview page at / with links into the framework and deep dives", () => {
    renderAt("/");

    expect(
      screen.getByRole("heading", {
        name: /the software layer between models and agents/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: /explore the eight-layer framework/i,
      }),
    ).toHaveAttribute("href", "/framework");
    expect(
      screen.getByRole("link", {
        name: /read the deep dives/i,
      }),
    ).toHaveAttribute("href", "/deep-dives");
  });

  it("renders the framework route with all eight layers and links to promoted deep dives", () => {
    renderAt("/framework");

    expect(
      screen.getByRole("heading", { name: /the eight layers of agent infrastructure/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /frameworks & runtimes/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /governance & observability/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /read the memory deep dive/i }),
    ).toHaveAttribute("href", "/deep-dives/memory");
  });

  it("renders deep dive detail pages from slug routes", () => {
    renderAt("/deep-dives/auth");

    expect(
      screen.getByRole("heading", { name: /the auth problem/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /back to deep dives/i }),
    ).toHaveAttribute("href", "/deep-dives");
    expect(
      screen.getByRole("heading", { name: /strategic implications/i }),
    ).toBeInTheDocument();
  });
});
