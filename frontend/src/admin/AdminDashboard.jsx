import { useNavigate } from "react-router-dom";
function AdminDashboard() {
    const navigate = useNavigate();

    return (

        <div className="container mt-5">

            <h1>
                🐾 Admin panel
            </h1>

            <p>
                Dobrodošao administratore!
            </p>


            <div className="row mt-4">


                <div className="col-md-4">

                    <div className="card p-4 shadow">

                        <h3>
                            🐶 Životinje
                        </h3>

                        <p>
                            Upravljanje životinjama
                        </p>

                        <button
                          className="btn btn-success"
                           onClick={() => {
        
                           navigate("/admin/animals");
                           }}
                            >
                         Pregled
                          </button>

                    </div>

                </div>



                <div className="col-md-4">

                    <div className="card p-4 shadow">

                        <h3>
                            👥 Korisnici
                        </h3>

                        <p>
                            Pregled korisnika
                        </p>

                        <button
    className="btn btn-primary"
    onClick={() => navigate("/admin/users")}
>
    Pregled
</button>

                    </div>

                </div>



                <div className="col-md-4">

                    <div className="card p-4 shadow">

                        <h3>
                            ❤️ Zahtevi
                        </h3>

                        <p>
                            Zahtevi za udomljavanje
                        </p>

                        <button
    className="btn btn-warning"
    onClick={() => navigate("/admin/requests")}
>
    Pregled
</button>

                    </div>

                </div>


            </div>


        </div>

    );

}


export default AdminDashboard;