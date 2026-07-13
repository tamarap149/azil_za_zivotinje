import { Container } from "react-bootstrap";
import "./HomeScreen.css";
import { useNavigate } from "react-router-dom"; 
import AnimalCard from "../components/AnimalCard";
import dog1 from "../assets/images/dog1.jpeg";
import dog2 from "../assets/images/dog2.jpeg";
import cat1 from "../assets/images/cat1.jpeg";
import Weather from "../components/Weather";

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


<section className="hero">


<h1>
🐾 Azil "Srce na četiri šape"
</h1>

<p>
Jer svaka šapa zaslužuje ljubav i dom ❤️
</p>


<button 
onClick={() => navigate("/animals")}
>
Pregledaj životinje
</button>


</section>



<section className="info-section">


<div className="info-card">

<h2>
🐶 50+
</h2>

<p>
Spašenih životinja
</p>

</div>



<div className="info-card">

<h2>
❤️ 120+
</h2>

<p>
Uspešnih udomljavanja
</p>

</div>



<div className="info-card">

<h2>
🤝 30+
</h2>

<p>
Volontera
</p>

</div>


</section>




<Weather />



<h2 className="section-title">
Uspešno su pronašli dom
</h2>



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




<section className="about-section">


<h2>
Zašto naš azil?
</h2>


<p>
Godinama unazad, mnoge životinje ostajale su bez doma zbog predrasuda, neodgovornog odnosa ljudi i pogrešnog verovanja da su neke rase vrednije od drugih. Psi lutalice, mešanci i životinje koje nisu imale "savršeno poreklo" često su bile poslednje koje bi neko izabrao.

Azil "Srce na četiri šape" nastao je iz želje da promeni takav pogled na svet. Verujemo da se vrednost jedne životinje ne određuje njenom rasom, izgledom ili poreklom, već njenom sposobnošću da pruži ljubav, poverenje i prijateljstvo.
</p>


</section>


</div>

);}
export default HomeScreen;