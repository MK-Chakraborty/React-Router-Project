import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContactAction, updateContactAction } from "./actions/actions";
import "./App.css";
import Contact from "./components/Contact";
import EditContact from "./components/EditContact";
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
      action: createContactAction,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: updateContactAction,
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
