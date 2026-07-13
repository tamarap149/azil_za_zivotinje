import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";

import "./LoginScreen.css";


function LoginScreen() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleLogin = async (e) => {

    e.preventDefault();
    try {
      const data = await userService.login({
        email,
        password
      });

      // čuvanje tokena
      localStorage.setItem("token", data.token);

      // čuvanje korisnika (kasnije za ime i admina)
      localStorage.setItem(
        "user",
        JSON.stringify(data)
      );


      setMessage("Uspešna prijava!");

      navigate("/");

    } catch(error) {

      setMessage(
        error.response?.data?.message ||
        "Greška prilikom prijave"
      );

    }

  };


  return (

    <div className="auth-page">

      <div className="auth-card">

        <h2>Prijava</h2>


        <form onSubmit={handleLogin}>


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />


          <input
            type="password"
            placeholder="Lozinka"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />


          <button type="submit">
            Prijavi se
          </button>


        </form>


        {message && (
          <p>{message}</p>
        )}


      </div>

    </div>

  );

}


export default LoginScreen;