import { useEffect, useState } from "react";
import animalService from "../services/animalService";
import { useNavigate } from "react-router-dom";


function AdminAnimals() {

const navigate = useNavigate();
    const [animals, setAnimals] = useState([]);


    useEffect(() => {


        const fetchAnimals = async () => {

            try {

                const data = await animalService.getAnimals();

                setAnimals(data);


            } catch(error) {

                console.log(error);

            }

        };


        fetchAnimals();


    }, []);
        

    const deleteHandler = async (id) => {

    if (!window.confirm("Da li ste sigurni?")) {

        return;

    }

    try {

        await animalService.deleteAnimal(id);

        setAnimals((prev) =>
            prev.filter((animal) => animal._id !== id)
        );

    } catch(error) {

        console.log(error);

    }

};


    return (

        <div className="container mt-5">

            <h1>
                🐶 Upravljanje životinjama
            </h1>


            <button
                  className="btn btn-success mb-3"
                  onClick={() => navigate("/admin/add-animal")}
                >
                  + Dodaj životinju
           </button>



            {animals.map((animal) => (

                <div
                    key={animal._id}
                    className="card p-3 mb-3 shadow"
                >

                    <h3>
                        {animal.name}
                    </h3>


                    <p>
                        Vrsta: {animal.type}
                    </p>


                    <p>
                        Status: {animal.status}
                    </p>


                    <button
    className="btn btn-warning me-2"
    onClick={() => navigate(`/admin/animals/${animal._id}/edit`)}
>
    Izmeni
</button>

                    <button
                      className="btn btn-danger"
                       onClick={() => deleteHandler(animal._id)}
                      >
                        Obriši
                    </button>
                    

                </div>


            ))}


        </div>

    );

}


export default AdminAnimals;