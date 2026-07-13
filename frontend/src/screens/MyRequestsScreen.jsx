import { useEffect, useState } from "react";
import adoptionRequestService from "../services/adoptionRequestService";


function MyRequestsScreen() {


    const [requests, setRequests] = useState([]);



    useEffect(() => {


        const fetchRequests = async () => {

            try {

                const data =
                    await adoptionRequestService.getMyRequests();

                setRequests(data);


            } catch(error) {

                console.log(error);

            }

        };


        fetchRequests();


    }, []);




    const getStatusText = (status) => {

        if(status === "pending") {
            return "⏳ Čeka odobrenje";
        }

        if(status === "approved") {
            return "✅ Zahtev odobren";
        }

        if(status === "rejected") {
            return "❌ Zahtev odbijen";
        }

        return status;

    };




    return (

        <div className="container mt-5">


            <h1 className="mb-4">
                🐾 Moji zahtevi za udomljavanje
            </h1>



            {requests.length === 0 ? (

                <div className="alert alert-info">

                    Još niste poslali nijedan zahtev.

                </div>


            ) : (


                requests.map((request) => (


                    <div
                        key={request._id}
                        className="card mb-4 shadow"
                    >



                        <div className="row g-0">


                            <div className="col-md-4">


                                {request.animal.image && (

                                    <img

                                        src={`http://localhost:5000${request.animal.image}`}

                                        alt={request.animal.name}

                                        className="img-fluid rounded-start"

                                        style={{
                                            height: "250px",
                                            width: "100%",
                                            objectFit: "cover"
                                        }}

                                    />

                                )}


                            </div>



                            <div className="col-md-8">


                                <div className="card-body">


                                    <h3 className="card-title">

                                        {request.animal.name}

                                    </h3>



                                    <p>

                                        🐾 Vrsta:
                                        {" "}
                                        {
                                          request.animal.type === "dog"
                                             ? "Pas"
                                             : request.animal.type === "cat"
                                               ? "Mačka"
                                             : request.animal.type
                                        }

                                    </p>



                                    <p>

                                        🎂 Godine:
                                        {" "}
                                        {request.animal.age}

                                    </p>



                                    <p>

                                        <b>Status:</b>

                                        <br />

                                        {getStatusText(request.status)}

                                    </p>



                                    <p>

                                        <b>Vaša poruka:</b>

                                        <br />

                                        {request.message}

                                    </p>



                                    <small className="text-muted">

                                        Poslato:
                                        {" "}
                                        {new Date(request.createdAt)
                                            .toLocaleDateString("sr-RS")}

                                    </small>



                                </div>


                            </div>


                        </div>


                    </div>


                ))

            )}


        </div>

    );

}


export default MyRequestsScreen;