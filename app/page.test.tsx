import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("App Router", () => {
  xit("component should have heading 'App Router'", () => {
    //render the component
    render(<Page />);

    //Get the element
    const heading = screen.getByText("App Router");

    //assertion
    expect(heading).toBeInTheDocument();
  });

  xit("component should have link to About Page", () => {
    //render the component
    render(<Page />);

    //Get the element
    const heading = screen.getByText("App Router");

    //assertion
    expect(heading).toBeInTheDocument();
  });
});
