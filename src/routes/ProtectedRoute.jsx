import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // se não estiver logado → volta pro login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // se estiver logado → mostra a página
  return children;
}
