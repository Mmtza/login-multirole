import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminDashboard from "./Components/Dashboard/admin-Dashboard";
import OwnerDashboard from "./Components/Dashboard/owner-Dashboard";
import EmployeDashboard from "./Components/Dashboard/employe-Dashboard";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/admin-dashboard",
    element: <ProtectedRoute element={<AdminDashboard />} />,
  },
  {
    path: "/owner-dashboard",
    element: <ProtectedRoute element={<OwnerDashboard />} />,
  },
  {
    path: "/employe-dashboard",
    element: <ProtectedRoute element={<EmployeDashboard />} />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
