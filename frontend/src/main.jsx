import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastProvider } from "./store/ToastContext.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <Provider store={store} >
        <PersistGate persistor = {persistor} loading = {<div>Loading...</div>}>
          <App />
        </PersistGate>
      </Provider>
    </ToastProvider>
  </StrictMode>
);
