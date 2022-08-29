import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CheckEmail from "./CheckEmail";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

//1.email input有出現
//2.按下按鈕有call function
//3.按鈕按下去 可能會到regis或是haveAcoount 只要稍微模擬一下可以換業就好

describe("when rendered this component", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  store = mockStore(initialState);
  const res = (
    <>
      <Provider store={store}>
        <CheckEmail />
      </Provider>
      ,
    </>
  );

  it("should render email input label", () => {
    render(res, { wrapper: BrowserRouter });

    const elHasEmailText = screen.getAllByText(/email/i);
    expect(elHasEmailText.length).toEqual(2);
  });
});
