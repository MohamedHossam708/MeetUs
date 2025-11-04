import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/Signin/SignIn";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./services/ProtectedRoute";
import "./App.css";

const router = createBrowserRouter([
  {
    index: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
