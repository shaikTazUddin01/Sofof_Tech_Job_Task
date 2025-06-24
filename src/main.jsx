import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routers from "./route/routers.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routers} />
    </Provider>
  </StrictMode>
);
