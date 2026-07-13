import axios from "axios";

const API_URL = "http://localhost:5000/api/adoptionRequests";

// Slanje zahteva za udomljavanje
const createRequest = async (animal, message) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(
        API_URL,
        {
            animal,
            message,
        },
        config
    );

    return response.data;
};

// Korisnik vidi svoje zahteve
const getMyRequests = async () => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(
        `${API_URL}/my`,
        config
    );

    return response.data;
};

// Admin vidi sve zahteve
const getRequests = async () => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(
        API_URL,
        config
    );

    return response.data;
};

// Admin menja status zahteva
const updateRequestStatus = async (requestId, status) => {

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.put(
        `${API_URL}/${requestId}`,
        { status },
        config
    );

    return response.data;
};

const adoptionRequestService = {
    createRequest,
    getMyRequests,
    getRequests,
    updateRequestStatus,
};

export default adoptionRequestService;