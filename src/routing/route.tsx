
import IndexPage from "@/components/pages/index.page";
import LoginPage from "@/components/pages/login.pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  // url coincida con cada path y renderice element
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <IndexPage />,
  },
]);