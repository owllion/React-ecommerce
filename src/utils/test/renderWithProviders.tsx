import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const initial = { output: 10 };
const mockStore = configureStore();
let store: any;
store = mockStore(initial);

const renderWithProviders = (
  ui: React.ReactElement,
  { initialState = initial, ...renderOptions } = {}
) => {
  const Wrapper = ({ children }: React.PropsWithChildren<{}>): JSX.Element => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderWithProviders;
