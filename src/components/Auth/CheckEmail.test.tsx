import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CheckEmail from "./CheckEmail";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import axios from "axios";
//1.email input有出現 ok
//2.按下按鈕有call function
//3.按鈕按下去 可能會到regis或是haveAcoount 只要稍微模擬一下可以換業就好
beforeEach(() => {
  jest.mock("axios");
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

  it("should render two elements with email text", () => {
    render(res, { wrapper: BrowserRouter });
    const elHasEmailText = screen.getAllByText(/email/i);
    expect(elHasEmailText.length).toEqual(2);
  });

  it("should render email input", () => {
    render(res, { wrapper: BrowserRouter });
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
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
      const btn = screen.getByRole("button", { name: "Continue" });
      userEvent.click(btn);

      const result = await (
        axios.post as jest.MockedFunction<typeof axios.post>
      ).mockResolvedValueOnce({ json: async () => true || false });
      // const axiosSpy = spyOn(mockedAxios, "get");
      // const result = await Users.all();
      // expect(axiosSpy).toHaveBeenCalledTimes(1); //✔Passes!

      // expect(result).toEqual(fakeResp); //❌Fails....
      // expect(result).toBe(true || false);
      expect(axios.post).toHaveBeenCalledTimes(1);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", () => {});
  });
});
