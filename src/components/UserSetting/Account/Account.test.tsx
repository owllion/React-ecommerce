import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import Account from "./Account";

beforeEach(() => {});
afterEach(() => {
  cleanup;
});
const initialState = { output: 10 };
const mockStore = configureStore();
let store;
store = mockStore(initialState);
const res = (
  <>
    <Provider store={store}>
      <Account />
    </Provider>
  </>
);
describe("when rendered Account component", () => {
  it(" email input should be disabled ", () => {
    render(res, { wrapper: BrowserRouter });

    const input = screen.getByLabelText("Email");

    expect((input as HTMLInputElement).value).not.toBeNull();
    expect(input).toBeDisabled();
  });

  it("should render save button", () => {
    render(res);
    const btn = screen.getByRole("button", { name: "SAVE" });
    expect(btn).toBeInTheDocument();
  });

  it("loading should not be rendered after get the response", async () => {
    render(res);
    const btn = screen.getByRole("button", { name: "SAVE" });
    fireEvent.click(btn);
    await waitFor(() => expect(btn).not.toHaveTextContent(/loading/i));
  });
});

describe("when send email button is clicked and call the api", () => {
  describe("when API call is successful", () => {});
});
