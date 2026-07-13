import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// REGISTRACIJA
const register = async (userData) => {
    const response = await axios.post(
        `${API_URL}/register`,
        userData
    );

    if (response.data.token) {

    localStorage.setItem(
        "user",
        JSON.stringify(response.data)
    );

    localStorage.setItem(
        "token",
        response.data.token
    );

}

    return response.data;
};


// LOGIN
const login = async (userData) => {
    const response = await axios.post(
        `${API_URL}/login`,
        userData
    );

    if (response.data.token) {

    localStorage.setItem(
        "user",
        JSON.stringify(response.data)
    );

    localStorage.setItem(
        "token",
        response.data.token
    );

}

    return response.data;
};
const getUsers = async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo?.token}`,
        },
    };

    const response = await axios.get(API_URL, config);
    return response.data;
};

const userService = {
    register,
    login,
    getUsers
    
};


export default userService;