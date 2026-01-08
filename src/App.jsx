import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
