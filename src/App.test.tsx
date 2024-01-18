import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it.skip("renders headline", () => {
    render(<App />);

    expect(screen.getByText(/moskwa/i)).toBeInTheDocument();
  });
});
