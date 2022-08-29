import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CheckEmail from "./CheckEmail";

//1.email input有出現
//2.按下按鈕有call function

const result = render(<CheckEmail />);

describe("when rendered this component", () => {
  it("should render email input label", () => {
    const text = screen.getByText(/email/i);
    expect(text).toBeInTheDocument();
  });
  it("should render an img", () => {
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
