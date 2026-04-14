import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import store from "./store/store";
import ErrorBoundary from "./shared/components/common/ErrorBoundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);
