import { render, screen } from "@testing-library/react";

import Page from "./page";

xdescribe("App Router: Works with dynamic route segments", () => {
  it("renders heading 'Slug: Test' on the page", () => {
    //ARRANGE
    render(<Page params={{ slug: "Test" }} />);

    //ACT
    const heading = screen.getByRole("heading");

    //ASSERT
    expect(heading).toHaveTextContent("Slug: Test");
  });

  it("renders heading 'Slug: Fix' on the page", () => {
    //ARRANGE
    render(<Page params={{ slug: "Fix" }} />);

    //ACT
    const heading = screen.getByRole("heading");

    //ASSERT
    expect(heading).toHaveTextContent("Slug: Fix");
  });
});
