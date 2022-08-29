import React from "react";
import { screen, render } from "@testing-library/react";

import App from "./App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it("App Test", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.queryByText("Hello World!")).not.toBeInTheDocument();
  });
});
