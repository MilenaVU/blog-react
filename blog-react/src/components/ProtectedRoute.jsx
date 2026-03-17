import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const userString = localStorage.getItem("user");

  // Si no hay nada → login
  if (!userString) {
    return <Navigate to="/login" replace />;
  }

  try {
    const user = JSON.parse(userString);

    // Si falla el parseo o está vacío
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/login" replace />;
  }
}