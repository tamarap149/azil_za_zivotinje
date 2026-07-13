import { useState } from "react";
import animalService from "../services/animalService";
import { useNavigate } from "react-router-dom";


function AddAnimal() {

    const navigate = useNavigate();


    const [formData, setFormData] = useState({

        name: "",
        type: "dog",
        age: "",
        description: "",
        image: null

    });



    const handleChange = (e) => {

        if(e.target.name === "image") {

            setFormData({

                ...formData,

                image: e.target.files[0]

            });

        } else {

            setFormData({

                ...formData,

                [e.target.name]: e.target.value

            });

        }

    };



    const submitHandler = async (e) => {

        e.preventDefault();


        try {


            const data = new FormData();


            data.append("name", formData.name);
            data.append("type", formData.type);
            data.append("age", formData.age);
            data.append("description", formData.description);


            if(formData.image) {

                data.append("image", formData.image);

            }



            const response = await animalService.createAnimal(data);



            console.log(response);


            alert("Životinja uspešno dodata 🐾");


            navigate("/admin/animals");



        } catch(error) {


            console.log(error);


        }


    };



    return (

        <div className="container mt-5">


            <h1>
                ➕ Dodaj životinju
            </h1>



            <form onSubmit={submitHandler}>


                <input

                    className="form-control mb-3"

                    name="name"

                    placeholder="Ime"

                    onChange={handleChange}

                />



                <select

                    className="form-control mb-3"

                    name="type"

                    onChange={handleChange}

                >

                    <option value="dog">
                        Pas
                    </option>

                    <option value="cat">
                        Mačka
                    </option>


                </select>



                <input

                    className="form-control mb-3"

                    name="age"

                    type="number"

                    placeholder="Godine"

                    onChange={handleChange}

                />



                <textarea

                    className="form-control mb-3"

                    name="description"

                    placeholder="Opis"

                    onChange={handleChange}

                />



                <label>
                    Slika životinje
                </label>


                <input

                    className="form-control mb-3"

                    type="file"

                    name="image"

                    accept="image/*"

                    onChange={handleChange}

                />



                <button className="btn btn-success">

                    Dodaj

                </button>


            </form>


        </div>

    );

}


export default AddAnimal;