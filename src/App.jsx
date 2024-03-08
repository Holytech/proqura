import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/LogIn.jsx";
import Registration from "./pages/Registration.jsx";
import Upload from "./pages/Upload.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
