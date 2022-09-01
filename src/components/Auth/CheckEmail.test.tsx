import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import CheckEmail from "./CheckEmail";
import * as api from "../../api/auth.api";
import { AxiosResponse } from "axios";

let mockCheckIfAccountExists: any;
beforeAll(() => {
  mockCheckIfAccountExists = jest
    .spyOn(api, "checkIfAccountExists")
    .mockReturnValue({
      data: {
        hasAccount: false,
      },
    } as unknown as Promise<AxiosResponse<any, any>>);
});

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
      <CheckEmail />
    </Provider>
  </>
);
describe("when rendered CheckEmail component", () => {
  it("should render two elements with email text", () => {
    render(res, { wrapper: BrowserRouter });
    const elHasEmailText = screen.getAllByText(/email/i);
    expect(elHasEmailText.length).toEqual(2);
  });

  it("should render email input ", () => {
    render(res, { wrapper: BrowserRouter });
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect((input as HTMLInputElement).value).toBe("");
  });
  it("email input should change ", () => {
    render(res, { wrapper: BrowserRouter });
    const input = screen.getByRole("textbox");
    const testVal = "email";
    fireEvent.change(input, { target: { value: testVal } });
    expect((input as HTMLInputElement).value).toBe(testVal);
  });

  it("should render Continue button", () => {
    render(res, { wrapper: BrowserRouter });
    const btn = screen.getByRole("button", { name: "Continue" });
    expect(btn).toBeInTheDocument();
  });
});

describe("when send email button is clicked and call the api", () => {
  describe("when API call is successful", () => {
    it("should return an boolean", async () => {
      render(res, { wrapper: BrowserRouter });

      act(() => {
        const btn = screen.getByRole("button", { name: "Continue" });
        userEvent.click(btn);
      });

      api.checkIfAccountExists({ email: "test@gamil.com" });
      expect(mockCheckIfAccountExists).toHaveBeenCalledTimes(3);
      expect(mockCheckIfAccountExists).toHaveBeenCalledWith();
    });
  });

  describe("when API call fails", () => {
    it("Error: an error occurred", () => {});
  });
});
