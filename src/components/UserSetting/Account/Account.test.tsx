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

//1.email input有出現 ok
//2.按下按鈕有call function
//3.按鈕按下去 可能會到regis或是haveAcoount 只要稍微模擬一下可以換業就好
beforeEach(() => {
  jest.mock("axios", () => {
    post: jest.fn();
  });
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
  //   it("name input should change ", () => {
  //     render(res, { wrapper: BrowserRouter });
  //     const inputItems = screen.getAllByRole("textbox");
  //     const testVal = "name";
  //     fireEvent.change(inputItems, { target: { value: testVal } });
  //     expect((inputItems ).toBe(testVal);
  //   });

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
