import { useEffect, useState } from "react";
import userService from "../services/userService";


function AdminUsers() {

    const [users, setUsers] = useState([]);


    useEffect(() => {

        async function loadUsers() {

            try {

                const data = await userService.getUsers();

                console.log(data);

                setUsers(data);

            } catch(error) {

                console.log("GRESKA:", error);

            }

        }


        loadUsers();

    }, []);



    return (

    <div className="container mt-5">

        <h1>
            👥 Korisnici
        </h1>


        {users.length === 0 ? (

            <p>
                Nema korisnika.
            </p>

        ) : (

            users.map((user) => (

                <div 
                    key={user._id}
                    className="card p-3 mt-3 shadow"
                >

                    <h3>
                        {user.name}
                    </h3>

                    <p>
                        Email: {user.email}
                    </p>

                    <p>
                        Uloga: {user.isAdmin ? "Administrator" : "Korisnik"}
                    </p>

                </div>

            ))

        )}


    </div>
    )
};

export default AdminUsers;