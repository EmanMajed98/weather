import React, { useState } from "react";
import Form from "./component/Form";
import Weather from "./component/weather";

function App() {
  const [weather, setWeather] = useState({ description: '', country: '', city: '', tempreature: '', humidity: ''});
  const api_key = "e36ed364400282e43250b6c4c0274d44";

  async function handlerweather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${api_key}`)
    const data = await url.json()

    if (city && country) {
      setWeather({
        description: data.weather[0].description,
        country: data.sys.country,
        city: data.name,
        tempreature: data.main.temp,
        humidity: data.main.humidity,
        

      })
      console.log(data)
    } else {
      console.log(weather)
    }



  }
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-[100%] flex justify-center items-center p-[103.5px] ">
    <div  >
      <Form getweather={handlerweather}>
        <Weather
        description={weather.description}
        country={weather.country}
        city={weather.city}
        tempreature={weather.tempreature}
        humidity={weather.humidity}
       /></Form>
      
    </div>
    </div>
  );
}

export default App;
