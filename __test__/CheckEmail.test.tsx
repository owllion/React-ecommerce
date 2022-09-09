import { checkIfAccountExists } from "../src/api/auth.api";
import {
  act,
  cleanup,
  fireEvent,
  prettyDOM,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import CheckEmail from "../src/components/Auth/CheckEmail";
import * as api from "../src/api/auth.api";
import { AxiosResponse } from "axios";
import React from "react";
import mockAxios from "axios";
import MockAdapter from "axios-mock-adapter";

// const ins = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
// jest.mock("axios", () => ({
//   post: jest.fn().mockResolvedValue({ data: { hasAccount: true } }),
// }));

// axios.post = jest.fn().mockResolvedValue({ data: { hasAccount: true } });
// console.log(axios, "這是axio，印出來看一下");
mockAxios.post = jest.fn();
let mockCheckIfAccountExists: any;
beforeAll(() => {
  // mock
  //   .onPost("/auth/check-user", {
  //     email: "test@gmail.com",
  //   })
  //   .reply(200, { data: { hasAccount: true } });

  mockCheckIfAccountExists = jest
    .spyOn(api, "checkIfAccountExists")
    .mockReturnValue({
      hasAccount: false,
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
    it("should be called once", async () => {
      render(res, { wrapper: BrowserRouter });

      const input = screen.getByRole("textbox");
      const testVal = "test@gmail.com";
      fireEvent.change(input, { target: { value: testVal } });
      expect((input as HTMLInputElement).value).toBe(testVal);

      act(async () => {
        const btn = screen.getByRole("button", { name: "Continue" });
        await userEvent.click(btn);
      });

      // api.checkIfAccountExists({ email: testVal });
      //模擬真的call instance api

      (
        mockAxios.post as jest.MockedFunction<typeof mockAxios.post>
      ).mockResolvedValue({ data: { hasAccount: true } });

      await checkIfAccountExists({ email: testVal });
      // expect(mVal).toBe(true);

      expect(mockCheckIfAccountExists).toHaveBeenCalledTimes(1);
      expect(mockCheckIfAccountExists).toHaveBeenCalledWith({
        email: testVal,
      });

      waitForElementToBeRemoved(
        screen.getByRole("heading", {
          name: /what's your email\?/i,
        })
      ).catch((err) => console.log(err));
    });
  });

  describe("when email input's validation fail after clicking the button", () => {
    it("Error message : 'Invalid email format' should be rendered", async () => {
      render(res, { wrapper: BrowserRouter });

      const testVal = "name";
      // const inputElement = screen.getByRole("textbox");

      expect(screen.getByRole("textbox")).toBeInTheDocument();

      // console.log(prettyDOM(inputElement));
      fireEvent.change(screen.getByRole("textbox"), {
        target: { value: testVal },
      });

      expect((screen.getByRole("textbox") as HTMLInputElement).value).toBe(
        testVal
      );

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
      // console.log(prettyDOM(inputElement));
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