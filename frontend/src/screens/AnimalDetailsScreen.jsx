import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import animalService from "../services/animalService";
import adoptionRequestService from "../services/adoptionRequestService";


function AnimalDetailsScreen() {

  const { id } = useParams();

  const navigate = useNavigate();


  const [animal, setAnimal] = useState(null);

  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");



  useEffect(() => {

    const fetchAnimal = async () => {

      try {

        const data = await animalService.getAnimalById(id);

        setAnimal(data);

      } catch (error) {

        console.log(error);

      }

    };


    fetchAnimal();

  }, [id]);



  const sendRequest = async () => {


    const token = localStorage.getItem("token");


    if (!token) {

      navigate("/login");

      return;

    }



    try {


      await adoptionRequestService.createRequest(

        animal._id,

        message

      );


      setSuccess(
        "✅ Zahtev za udomljavanje je uspešno poslat!"
      );


      setError("");

      setMessage("");



    } catch (error) {


      setError(

        error.response?.data?.message ||

        "Greška prilikom slanja zahteva."

      );


      setSuccess("");

    }

  };



  if (!animal) {

    return <h2>Učitavanje...</h2>;

  }



  return (

    <div className="container mt-5">


      <img

        src={`http://localhost:5000${animal.image}`}

        alt={animal.name}

        style={{

          width: "500px",

          borderRadius: "10px"

        }}

      />



      <h1 className="mt-3">

        {animal.name}

      </h1>



      <p>
        <b>Vrsta:</b> {
    animal.type === "dog" ? "Pas" :
    animal.type === "cat" ? "Mačka" :
    animal.type
        }
       </p>


      <p>
        <b>Godine:</b> {animal.age}
      </p>


      <p>
        <b>Opis:</b> {animal.description}
      </p>


      <p>
  <b>Status:</b> {
    animal.status === "available"
      ? "Dostupna za udomljavanje"
      : "Udomljena"
  }
</p>



      {animal.status === "available" && (

        <div className="mt-4">


          <h4>
            Zahtev za udomljavanje
          </h4>



          <textarea

            className="form-control"

            rows="4"

            placeholder="Napišite zašto želite da udomite ovu životinju..."

            value={message}

            onChange={(e) => setMessage(e.target.value)}

          />



          <button

            className="btn btn-success mt-3"

            onClick={sendRequest}

          >

            ❤️ Pošalji zahtev

          </button>



          {success && (

            <p className="text-success mt-3">

              {success}

            </p>

          )}



          {error && (

            <p className="text-danger mt-3">

              {error}

            </p>

          )}


        </div>

      )}


      {animal.status === "adopted" && (

        <p className="text-success mt-3">

          🏡 Ova životinja je već udomljena.

        </p>

      )}



    </div>

  );

}


export default AnimalDetailsScreen;