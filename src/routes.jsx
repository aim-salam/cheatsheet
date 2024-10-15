import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // element: <AuthPage />,
  },
  //  {
  //    path: "/profile",
  //    element: <ProfilePage />,
  //  },
]);

export default router;
