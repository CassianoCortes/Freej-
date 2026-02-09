import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* rota pública */}
      <Route path="/" element={<Login />} />

      {/* rota protegida */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
