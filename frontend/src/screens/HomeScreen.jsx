import { Container } from "react-bootstrap";
import "./HomeScreen.css";
import { useNavigate } from "react-router-dom"; 
import AnimalCard from "../components/AnimalCard";
import dog1 from "../assets/images/dog1.jpeg";
import dog2 from "../assets/images/dog2.jpeg";
import cat1 from "../assets/images/cat1.jpeg";

function HomeScreen() {
  const navigate = useNavigate(); 
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      padding: "20px"
    }
  };

  return (
    <div>
      <div className="hero">
        <h1>Azil za životinje 🐾</h1>
        <p>Udomi, pomozi, spasi</p>

        <button onClick={() => navigate("/animals")}>
          Pregledaj životinje
        </button>
      </div>

      <div style={styles.container}>
        <AnimalCard
          name="Bobi"
          image={dog1}
           showDetailsButton={false}
             showActions={false}
        />

        <AnimalCard
          name="Maza"
          image={cat1}
          showDetailsButton={false}
         showActions={false}
        />

        <AnimalCard
          name="Rex"
          image={dog2}
          showDetailsButton={false}
          showActions={false}
        />
      </div>
    </div>
  );
}

export default HomeScreen;