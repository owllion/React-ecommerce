import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utile";

// import store from "./store/index";
import App from "./App";

// let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
