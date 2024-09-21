import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AplicationNotes from "./pages/AplicationNotes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store/Store.js";
import ErrorFallbackBoundary from "./routers/ErrorFallbackBoundary.jsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <AplicationNotes />,
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
