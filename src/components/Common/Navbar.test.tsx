import { MemoryRouter } from "react-router-dom";
import {
  act,
  cleanup,
  fireEvent,
  prettyDOM,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "../../App";

const renderRouterWrapper =
  (route: any) =>
  ({ children }: React.PropsWithChildren) =>
    <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;

it("navigates home when you click the logo", () => {
  render(renderRouterWrapper("tret"));

  // Interact with page
  act(() => {
    // Find the link (perhaps using the text content)
    // Click it
  });

  // Check correct page content showed up
});
