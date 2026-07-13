import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import animalService from "../services/animalService";

function EditAnimal() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState(null);
    const [currentImage, setCurrentImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleImageChange = (e) => {

    const file = e.target.files[0];

    setImage(file);


    if(file){

        setPreviewImage(URL.createObjectURL(file));

    }

};

    useEffect(() => {

        async function loadAnimal() {

            try {

                const data = await animalService.getAnimalById(id);

                setName(data.name);
                setType(data.type);
                setAge(data.age);
                setDescription(data.description);
                setStatus(data.status);
                setCurrentImage(data.image);

            } catch (error) {

                console.log(error);

            }

        }

        loadAnimal();

        const handleImageChange = (e) => {

    const file = e.target.files[0];

    setImage(file);

    if(file){
        setPreviewImage(URL.createObjectURL(file));
    }

};

    }, [id]);

   const submitHandler = async (e) => {

    e.preventDefault();

    try {

        const data = new FormData();

        data.append("name", name);
        data.append("type", type);
        data.append("age", age);
        data.append("description", description);
        data.append("status", status);


        if(image) {

            data.append("image", image);

        }


        await animalService.updateAnimal(id, data);


        alert("Životinja je uspešno izmenjena.");

        navigate("/admin/animals");


    } catch(error) {

        console.log(error);

    }

};

    return (

        <div className="container mt-5">

            <h1>Izmena životinje</h1>

            <form onSubmit={submitHandler}>

                <input
                    className="form-control mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ime"
                />

                <input
                    className="form-control mb-3"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="Vrsta"
                />

                <input
                    className="form-control mb-3"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Godine"
                />

                <textarea
                    className="form-control mb-3"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                    {
(previewImage || currentImage) &&

<div className="mb-3">

<p>
{previewImage ? "Nova slika:" : "Trenutna slika:"}
</p>


<img
src={
    previewImage
    ? previewImage
    : `http://localhost:5000${currentImage}`
}
alt="životinja"
width="150"
/>

</div>

}


                             <label>
                               Nova slika (opciono)
                               </label>


                                 <input

                                  className="form-control mb-3"

                                   type="file"

                                      accept="image/*"

                                     onChange={handleImageChange}

                                    />

                <select
                    className="form-select mb-3"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="available">Dostupna</option>
                    <option value="adopted">Udomljena</option>
                </select>

                         <button
                          type="submit"
                          className="btn btn-success"
                          >
                         Sačuvaj izmene
                        </button>

            </form>

        </div>

    );

}

export default EditAnimal;