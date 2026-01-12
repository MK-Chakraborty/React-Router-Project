import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createContactAction,
  deleteContactAction,
  toggleFavouriteContactAction,
  updateContactAction,
} from "./actions/actions";
import "./App.css";
import Contact from "./components/Contact";
import EditContact from "./components/EditContact";
import ErrorPage from "./components/ErrorPage";
import Index from "./components/Index";
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
          index: true,
          element: <Index />,
        },
        {
          path: "contacts/:contactId",
          element: <Contact />,
          loader: contactLoader,
          action: toggleFavouriteContactAction,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: updateContactAction,
        },
        {
          path: "contacts/:contactId/destroy",
          action: deleteContactAction,
          errorElement: <ErrorPage />,
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
