import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContactaction } from "./actions/actions";
import "./App.css";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";
import { contactLoader, contactsLoader } from "./loaders/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: contactsLoader,
      action: createContactaction,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
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
