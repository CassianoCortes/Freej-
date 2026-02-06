import { Link } from "react-router-dom";

export function Header() {
  return (
    <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
      <nav style={{ display: "flex", gap: "16px" }}>
        <Link to="/">Home</Link>
        <Link to="/jobs">Vagas</Link>
        <Link to="/create-job">Criar Vaga</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
