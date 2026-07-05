import "./LoginScreen.css";
import { Container } from "react-bootstrap";

function LoginScreen() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Prijava</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Lozinka" />

        <button>Prijavi se</button>
      </div>
    </div>
  );
}

export default LoginScreen;