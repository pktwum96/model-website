import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";
import Work from "./pages/Work";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/works",
        element: <Work />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
