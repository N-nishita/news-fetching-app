import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import { BookmarkPage, DetailsPage, HomePage, SearchPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "search/:keywords",
        element: <SearchPage />,
      },
      {
        path: "bookmarks",
        element: <BookmarkPage />,
      },
      {
        path: "news/:encodedUrl",
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline">404</h1>
        <h2 className="text-2xl font-bold underline">Page Not Found</h2>
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
