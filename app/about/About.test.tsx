import { render, screen } from "@testing-library/react";
import About from "./page";

describe("About", () => {
  xit("renders about page", () => {
    render(<About />); //ARRANGE
    const heading = screen.getByRole("heading", { level: 1 }); //ACT
    expect(heading).toBeInTheDocument(); //ASSERT
  });

  xit("about page should contain paragraphs", () => {
    render(<About />); //ARRANGE
    const divElement = screen.getByTestId("notes"); //ACT
    const paragraphElement = screen.getAllByRole("paragraph");
    const paragraphOne = screen.getByTestId("paragraph-1");

    expect(divElement).toBeInTheDocument(); //ASSERT
    expect(paragraphElement).toContain(paragraphOne); //ASSERT
  });
});
