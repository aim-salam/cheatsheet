import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  //  {
  //    path: "/profile",
  //    element: <ProfilePage />,
  //  },
]);

export default router;
