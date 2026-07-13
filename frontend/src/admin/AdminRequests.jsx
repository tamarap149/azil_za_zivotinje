import { useEffect, useState } from "react";
import adoptionRequestService from "../services/adoptionRequestService";


function AdminRequests() {

    const [requests, setRequests] = useState([]);



    useEffect(() => {

        async function loadRequests() {

            try {

                const data = await adoptionRequestService.getRequests();

                setRequests(data);

            } catch (error) {

                console.log("GRESKA:", error);

            }

        }


        loadRequests();

    }, []);




    const handleStatusChange = async (requestId, newStatus) => {

        try {

            await adoptionRequestService.updateRequestStatus(
                requestId,
                newStatus
            );


            setRequests((prev) =>
                prev.map((req) =>
                    req._id === requestId
                        ? { ...req, status: newStatus }
                        : req
                )
            );


        } catch (error) {

            console.log(
                "GRESKA pri izmeni statusa:",
                error
            );

        }

    };




    return (

        <div className="container mt-5">

            <h1>
                ❤️ Zahtevi za udomljavanje
            </h1>



            {requests.length === 0 ? (

                <p>
                    Nema zahteva.
                </p>

            ) : (


                requests.map((req) => (

                    <div
                        key={req._id}
                        className="card p-3 mt-3 shadow"
                    >

                        <h3>
                            {req.animal?.name}
                        </h3>


                        <p>
                            Korisnik:
                            {" "}
                            {req.user?.name}
                            {" "}
                            ({req.user?.email})
                        </p>


                        <p>
                            Status:
                            {" "}
                            {req.status}
                        </p>



                        <div className="d-flex gap-2 mt-2">


                            <button
                                className="btn btn-success btn-sm"
                                onClick={() =>
                                    handleStatusChange(
                                        req._id,
                                        "approved"
                                    )
                                }
                            >
                                Odobri
                            </button>



                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                    handleStatusChange(
                                        req._id,
                                        "rejected"
                                    )
                                }
                            >
                                Odbij
                            </button>


                        </div>


                    </div>

                ))

            )}


        </div>

    );

}


export default AdminRequests;