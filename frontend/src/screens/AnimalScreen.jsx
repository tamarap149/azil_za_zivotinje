import { Container } from "react-bootstrap";

import "./AnimalScreen.css";
import AnimalCard from "../components/AnimalCard";
import dog1 from "../assets/images/dog1.jpeg";
import cat1 from "../assets/images/cat1.jpeg";
import dog2 from "../assets/images/dog2.jpeg";
import cat2 from "../assets/images/cat2.jpeg";

import { useState } from "react";



function AnimalsScreen() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const animals = [
    {
      id: 1,
      name: "Bobi",
      type: "Pas",
      age: "2 godine",
      status: "Slobodan",
      description: "Bobi je miran i druželjubiv pas koji voli ljude.",
      image: dog1
    },
    {
      id: 2,
      name: "Maza",
      type: "Mačka",
      age: "1 godina",
      status: "Udomljen",
      description: "Maza je umiljata mačka koja voli da spava.",
      image: cat1
    },
    {
      id: 3,
      name: "Rex",
      type: "Pas",
      age: "4 godine",
      status: "Slobodan",
      description: "Rex je aktivan pas koji voli šetnje i igru.",
      image: dog2
    },
    {
      id: 4,
      name: "Luna",
      type: "Mačka",
      age: "3 godine",
      status: "Slobodan",
      description: "Luna je mirna i nezavisna mačka.",
      image: cat2
    }
  ];

  return (
    <div className="animals-page">

      <h1>🐾 Životinje za udomljavanje</h1>
      <p>Here will be displayed all animals available for adoption.</p>

      <div className="animals-grid">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            name={animal.name}
            type={animal.type}
            age={animal.age}
            status={animal.status}
            image={animal.image}
            onDetails={() => setSelectedAnimal(animal)}
          />
        ))}
      </div>

      {/* DETAIL VIEW */}
    {selectedAnimal && (
  <div className="details-overlay">
    <div className="details-card">
      

      {/* X dugme */}
      <button
        className="close-btn"
        onClick={() => setSelectedAnimal(null)}
      >
        ✖
      </button>

      <img src={selectedAnimal.image} alt={selectedAnimal.name} />

      <h2>{selectedAnimal.name}</h2>
      <p><b>Tip:</b> {selectedAnimal.type}</p>
      <p><b>Godine:</b> {selectedAnimal.age}</p>
      <p><b>Status:</b> {selectedAnimal.status}</p>
      <p>{selectedAnimal.description}</p>

      

    </div>
  </div>
)}

    </div>
  );
}

export default AnimalsScreen;