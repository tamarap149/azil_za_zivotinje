import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfileScreen() {

    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        const loadProfile = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get(
                    "http://localhost:5000/api/users/profile",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setUser(response.data);

            } catch (error) {

                console.log(error);

            }

        };

        loadProfile();

    }, []);

    if (!user) {

        return <h2 className="text-center mt-5">Učitavanje...</h2>;

    }

    return (

        <div className="container mt-5">

            <div
                className="card shadow p-5"
                style={{ maxWidth: "700px", margin: "auto" }}
            >

                <div className="text-center">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="Profil"
                        width="130"
                    />

                    <h2 className="mt-3">
                        {user.name}
                    </h2>

                    <p className="text-muted">
                        {user.email}
                    </p>

                </div>

                <hr />

                <h4>Podaci o nalogu</h4>

                <p>
                    <strong>Ime:</strong> {user.name}
                </p>

                <p>
                    <strong>Email:</strong> {user.email}
                </p>

                <p>
                    <strong>Uloga:</strong>{" "}
                    {user.isAdmin ? "Administrator" : "Korisnik"}
                </p>

                <div className="d-grid gap-3 mt-4">

                    {!user.isAdmin && (

                        <button
                            className="btn btn-success"
                            onClick={() => navigate("/myrequests")}
                        >
                            ❤️ Moji zahtevi za udomljavanje
                        </button>

                    )}

                    {user.isAdmin && (

                        <button
                            className="btn btn-warning"
                            onClick={() => navigate("/admin")}
                        >
                            🛠 Admin panel
                        </button>

                    )}

                </div>

            </div>

        </div>

    );

}

export default ProfileScreen;