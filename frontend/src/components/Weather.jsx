import { useEffect, useState } from "react";

function Weather() {

    const [weather, setWeather] = useState(null);


    useEffect(() => {

        async function getWeather(){

            try {

                const response = await fetch(
                    "https://api.open-meteo.com/v1/forecast?latitude=44.386&longitude=19.101&current=temperature_2m,weather_code"
                );


                const data = await response.json();

                setWeather(data.current);


            } catch(error){

                console.log(error);

            }

        }


        getWeather();


    }, []);



    return (

        <div className="weather-box">

            <h3>
                🌤️ Vremenska prognoza
            </h3>


            {
                weather ?

                <>

                <p>
                    Temperatura: {weather.temperature_2m}°C
                </p>

                <p>
                    Idealno vreme za šetnju ljubimaca 🐕
                </p>

                </>

                :

                <p>
                    Učitavanje prognoze...
                </p>

            }


        </div>

    );

}


export default Weather;