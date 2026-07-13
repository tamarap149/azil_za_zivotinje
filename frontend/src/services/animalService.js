import axios from "axios";

const API_URL = "http://localhost:5000/api/animals";


const getAnimals = async () => {

    const response = await axios.get(API_URL);

    return response.data;

};


const getAnimalById = async (id) => {

    const response = await axios.get(
        `${API_URL}/${id}`
    );

    return response.data;

};


const createAnimal = async (animalData) => {

    const response = await axios.post(
        API_URL,
        animalData,
        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );


    return response.data;

};
const deleteAnimal = async (id) => {

    const response = await axios.delete(
        `${API_URL}/${id}`
    );

    return response.data;

};
const updateAnimal = async (id, animal) => {

    const response = await axios.put(
        `${API_URL}/${id}`,
        animal,
        {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );


    return response.data;

};


const animalService = {
    getAnimals,
    getAnimalById,
    createAnimal,
    deleteAnimal,
    updateAnimal   
};


export default animalService;