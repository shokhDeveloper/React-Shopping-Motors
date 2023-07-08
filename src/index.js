import "./index.scss"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./Settings/Context/Context";
import { Provider } from "react-redux";
import { store } from "./Settings";
import { CartProvider } from "react-use-cart";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </CartProvider>
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
