import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin(type) {
    const userData = {
      id: 1,
      name: "Usuário Teste",
      type: type,
    };

    login(userData);
    navigate("/home");
  }

  return (
    <div className="login-container">
      <h1 className="logo">Freejá</h1>

      <Button onClick={() => handleLogin("restaurant")}>
        Sou Restaurante
      </Button>

      <Button variant="outline" onClick={() => handleLogin("professional")}>
        Sou Profissional
      </Button>
    </div>
  );
}


