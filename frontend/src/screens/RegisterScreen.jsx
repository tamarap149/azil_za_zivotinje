import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterScreen.css";
import userService from "../services/userService";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Lozinke se ne poklapaju");
      return;
    }

    try {
      await userService.register({
        name,
        email,
        password,
      });

      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Greška prilikom registracije"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Registracija</h2>

        {error && (
          <p className="error-message">{error}</p>
        )}

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Ime"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Potvrdi lozinku"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">
            Registruj se
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterScreen;