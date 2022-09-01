import {
  act,
  cleanup,
  fireEvent,
  prettyDOM,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import CheckEmail from "./CheckEmail";
import * as api from "../../api/auth.api";
import { AxiosResponse } from "axios";
import React from "react";

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
const createRouterWrapper =
  (route: any): React.ComponentType =>
  ({ children }: React.PropsWithChildren) =>
    <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;

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
    it("should be called once", async () => {
      render(res, { wrapper: BrowserRouter });

      act(() => {
        const btn = screen.getByRole("button", { name: "Continue" });
        userEvent.click(btn);
      });

      api.checkIfAccountExists({ email: "test@gamil.com" });
      expect(mockCheckIfAccountExists).toHaveBeenCalledTimes(1);
      expect(mockCheckIfAccountExists).toHaveBeenCalledWith({
        email: "test@gamil.com",
      });
    });
  });

  describe("when email input's validation fail after clicking the button", () => {
    it("Error message : 'Invalid email format' should be rendered", async () => {
      render(res, { wrapper: BrowserRouter });

      const testVal = "name";
      const inputElement = screen.getByRole("textbox");
      console.log(prettyDOM(inputElement));
      fireEvent.change(inputElement, { target: { value: testVal } });

      expect((inputElement as HTMLInputElement).value).toBe(testVal);

      act(() => {
        userEvent.click(screen.getByRole("button", { name: "Continue" }));
      });

      //form has error wont trigger the api
      await waitFor(() =>
        expect(screen.queryByText(/Invalid email format/i)).toBeInTheDocument()
      );
    });
    it("Error message : 'This field is required' should be rendered", async () => {
      render(res, { wrapper: BrowserRouter });

      const inputElement = screen.getByRole("textbox");
      console.log(prettyDOM(inputElement));
      fireEvent.change(inputElement, { target: { value: "" } });

      expect((inputElement as HTMLInputElement).value).toBe("");

      act(() => {
        userEvent.click(screen.getByRole("button", { name: "Continue" }));
      });

      await waitFor(() =>
        expect(
          screen.queryByText(/This field is required/i)
        ).toBeInTheDocument()
      );
    });
  });
});
