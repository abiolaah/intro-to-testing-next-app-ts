import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

describe("Counter", () => {
  xit("confirm there is a heading", () => {
    render(<Counter />); //ARRANGE

    const heading = screen.getByRole("heading", { level: 2 }); //ACT

    expect(heading).toBeInTheDocument();
  });

  xit("confirm change in count value", () => {
    render(<Counter />); //ARRANGE

    const headingValue = screen.getByRole("heading"); //ACT

    expect(headingValue).toHaveTextContent("0"); // ASSERT

    const incrementButton = screen.getByRole("button"); // ARRANGE

    fireEvent.click(incrementButton); // ACT

    expect(headingValue).toHaveTextContent("1"); // ASSERT
  });
});
