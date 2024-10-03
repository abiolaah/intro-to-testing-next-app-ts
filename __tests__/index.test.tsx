import { render, screen } from "@testing-library/react";

import Home from "../pages/home/index";

describe("Home-Heading", () => {
  it("render page successfully", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const pageTitle = screen.getByRole("heading", { level: 1 });

    // ASSERT
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent(/welcome to next\.js!/i);
  });

  xit("render paragraph 'Get Started' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const paragraph1 = screen.getByText(
      /Get started by editing pages\/index\.js/i
    );
    // const paragraph2 = screen.getByRole("paragrah", {
    //   name: /Get started by editing pages\/index\.js/i,
    // });

    // ASSERT
    expect(paragraph1).toBeInTheDocument();
    // expect(paragraph2).toBeInTheDocument();
  });

  it("render heading 'Documentation' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const docHeading = screen.getByRole("heading", {
      name: /Documentation/gim,
    });

    // ASSERT
    expect(docHeading).toBeInTheDocument();
  });

  it("render heading 'Learn' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const learnHeading = screen.getByRole("heading", {
      name: /Learn/gim,
    });

    // ASSERT
    expect(learnHeading).toBeInTheDocument();
  });

  it("render heading 'Examples' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const examplesHeading = screen.getByRole("heading", {
      name: /Examples/gim,
    });

    // ASSERT
    expect(examplesHeading).toBeInTheDocument();
  });

  it("render heading 'Deploy' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const deployHeading = screen.getByRole("heading", {
      name: /Deploy/gim,
    });

    // ASSERT
    expect(deployHeading).toBeInTheDocument();
  });
});

describe("Home-Heading", () => {
  xit("render link 'Next.js' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const nextLink = screen.getByRole("link", {
      name: /next\.js/gim,
    });

    // ASSERT
    expect(nextLink).toBeInTheDocument();
  });

  it("render link 'Documentation' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const docLink = screen.getByRole("link", {
      name: /Documentation/gim,
    });

    // ASSERT
    expect(docLink).toBeInTheDocument();
  });

  it("render link 'Learn' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const learnLink = screen.getByRole("link", {
      name: /Learn/gim,
    });

    // ASSERT
    expect(learnLink).toBeInTheDocument();
  });

  it("render link 'Examples' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const examplesLink = screen.getByRole("link", {
      name: /Examples/gim,
    });

    // ASSERT
    expect(examplesLink).toBeInTheDocument();
  });

  xit("render link 'Deploy' on homepage", () => {
    // ARRANGE
    render(<Home />);

    // ACT
    const deployLink = screen.getByRole("link", {
      name: /Deploy/gim,
    });

    // ASSERT
    expect(deployLink).toBeInTheDocument();
  });
});
