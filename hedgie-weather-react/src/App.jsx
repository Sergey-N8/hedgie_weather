import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PartOfDay from './PartOfDay/PartOfDay.jsx'
import { TODAY } from './PartOfDay/today.js'
import './App.css'
import { TOMORROW } from './PartOfDay/tomorrow.js'
import InputCity from './InputCity/InputCity.jsx'
// import Data from './Data/Data.jsx'
import { FunctionDay } from './Function/FunctionDay.jsx'
// import WeatherFunctionDay from './WeatherFunction/WeatherFunctionDay.jsx'

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [history, setWeatherHistory] = useState({});

  const hendlenCityInput = (search) => {
    setSearch(search)
  }

  const api = {
    keyOpenWeatherMap: "e0d048c37bdfd0ad7c604f3991f0fab3",
    keyWeatherApi: "e13fe10f11954b6aa3260206242606",
    baseLocation: "http://api.openweathermap.org/geo/1.0/",
    baseOpenWeatherMapV2_5: "https://api.openweathermap.org/data/2.5/",
    baseWeatherApi: "https://api.weatherapi.com/v1/",
  };

  const getYesterdayDate = () => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const result = yesterday.getFullYear() + "-" + String(yesterday.getMonth() + 1).padStart(2, '0') + "-" + String(yesterday.getDate()).padStart(2, '0');
    return result
  }

  const searchPressed = () => {
    Promise.all([
      fetch(`${api.baseWeatherApi}/forecast.json?key=${api.keyWeatherApi}&q=${search}&days=2&aqi=no&alerts=no}`),
      fetch(`${api.baseWeatherApi}/history.json?key=${api.keyWeatherApi}&q=${search}&dt=${getYesterdayDate()}`)
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()])
      })
      .then(([dataWeather, dataHistory]) => {
        setWeather(dataWeather);
        setWeatherHistory(dataHistory);
      });

  };


  return (
    <>
      <header className="header">
        <h1>Hedgie Weather</h1>
      </header>

      <div className="input-container">
        <InputCity onChange={hendlenCityInput} />
        <button className="button-city" onClick={searchPressed}>GO</button >
      </div>

      {typeof weather.location !== "undefined" ? (

        <>
          <FunctionDay weather={weather} history={history} />

          <PartOfDay />
        </>

      ) : (
        ""
      )}
    </>
  );
}

export default App