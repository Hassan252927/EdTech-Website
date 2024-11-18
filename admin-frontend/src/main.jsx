import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLogin from "./components/login.jsx";
import "./index.css";
import Home from "./components/home.jsx";
import App from "./App.jsx";
import ProtectedRoute from "./components/protected.jsx";
import DataTable from "./components/formdata.jsx";
import Layout from "./components/layout.jsx";
import NotFound from "./components/NotFound.jsx";
import StudentsTable from "./studentdata.jsx";

// Define routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "admin", // New route for Admin Panel
        element: <AdminLogin />,
      },
    
      {
        path: "/*", // New route for Admin Panel
        element: <NotFound />,
      },
      {
        path: "sidebar",
        element: (
          <ProtectedRoute>
            <Layout /> {/* Protected route for Sidebar */}
          </ProtectedRoute>
        ),
        // element: <Sidebar/>
        children: [
          {
            path: "data-form",
            element: <DataTable />,
          },
          {
            path: "student-data",
            element: <StudentsTable />,
          },
        ],
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
