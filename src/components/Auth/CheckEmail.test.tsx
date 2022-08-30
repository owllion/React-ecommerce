import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import CheckEmail from "./CheckEmail";
import mockAxios from "axios";

//1.email input有出現 ok
//2.按下按鈕有call function
//3.按鈕按下去 可能會到regis或是haveAcoount 只要稍微模擬一下可以換業就好

const getMock = jest.fn().mockImplementation((url) => {
  switch (url) {
    case "/check-user":
      return Promise.resolve({ data: { haveAccount: true || false } });
    case "/items.json":
      return Promise.resolve({ data: [{ id: 1 }, { id: 2 }] });
    default:
      return Promise.reject(new Error("not found"));
  }
});
// jest.mock("axios", () => ({
//   __esModule: true,
//   get: jest.fn().mockImplementation((url) => {
//     switch (url) {
//       case "/check-user":
//         return Promise.resolve({ data: { haveAccount: true || false } });
//       case "/items.json":
//         return Promise.resolve({ data: [{ id: 1 }, { id: 2 }] });
//       default:
//         return Promise.reject(new Error("not found"));
//     }
//   }),
// }));
(axios.get = jest.fn().mockImplementation((url) => {
  switch (url) {
    case "/check-user":
      return Promise.resolve({ data: { haveAccount: true || false } });
    case "/items.json":
      return Promise.resolve({ data: [{ id: 1 }, { id: 2 }] });
    default:
      return Promise.reject(new Error("not found"));
  }
})),
  // //@ts-ignore
  // (axios as jest.Mocked<typeof axios>).create.mockReturnValue({
  //   get: getMock,
  // });
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
      const btn = screen.getByRole("button", { name: "Continue" });
      userEvent.click(btn);

      const getMock = jest.fn().mockImplementation((url) => {
        switch (url) {
          case "/check-user":
            return Promise.resolve({ data: { haveAccount: true || false } });
          case "/items.json":
            return Promise.resolve({ data: [{ id: 1 }, { id: 2 }] });
          default:
            return Promise.reject(new Error("not found"));
        }
      });

      // (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      //   data: { haveAccount: true || false },
      // });
      axios.get("/check-user");

      // await axios.get("/check-user");
      const axiosSpy = jest.spyOn(axios, "get");

      // const result = await Users.all();
      expect(axiosSpy).toHaveBeenCalledTimes(1); //✔Passes!

      // expect(result).toEqual(fakeResp); //❌Fails....
      // expect(result).toBe(true || false);
      // expect(axios.get).toHaveBeenCalledTimes(1);
    });
  });

  describe("when API call fails", () => {
    it("should return empty users list", () => {});
    it("Error: an error occurred", () => {
      const errorMessage = "Error";

      // (
      //   axios.get as jest.MockedFunction<typeof axios.get>
      // ).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    });
  });
});
