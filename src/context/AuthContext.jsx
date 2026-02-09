
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // carregar usuário salvo
  useEffect(() => {
    const storedUser = localStorage.getItem("@freelaUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(userData) {
    setUser(userData);
    localStorage.setItem("@freelaUser", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("@freelaUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
function login(type) {
  const fakeUser = {
    id: 1,
    name: "Usuário Teste",
    type: type,
  };

  setUser(fakeUser);
}
