import { Container } from "react-bootstrap";

import "./RegisterScreen.css";

function RegisterScreen() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Registracija</h2>

        <input type="text" placeholder="Ime" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Lozinka" />
        <input type="password" placeholder="Potvrdi lozinku" />

        <button>Registruj se</button>
      </div>
    </div>
  );
}

export default RegisterScreen;