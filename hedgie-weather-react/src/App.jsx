import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PartOfDay from './PartOfDay/PartOfDay.jsx'
import { RESULTLIST } from './PartOfDay/resultList.js'
import './App.css'
import Funk from './Funk.jsx'

function App() {
  const api = {
    key: "e13fe10f11954b6aa3260206242606",
    base: "https://api.weatherapi.com/v1/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [history, setWeatherHistory] = useState({});

  const getYesterdayDate = () => {
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const result = yesterday.getFullYear() + "-" + String(yesterday.getMonth() + 1).padStart(2, '0') + "-" + String(yesterday.getDate()).padStart(2, '0');
    return result
  }

  const searchPressed = () => {
    Promise.all([
      fetch(`${api.base}/forecast.json?key=${api.key}&q=${search}&days=2&aqi=no&alerts=no}`),
      fetch(`${api.base}/history.json?key=${api.key}&q=${search}&dt=${getYesterdayDate()}`)
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
      <div >
        <header className="app-header">
          <h1>Hedgie Weather</h1>
        </header>
        <div className="app-input-container">
          <input
            className="app-input"
            type="text"
            placeholder="Введите свой город"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="app-button-city" onClick={searchPressed}>GO</button>
        </div>
        <>
          <Funk weather={weather} />
        </>
        {typeof weather.location !== "undefined" && typeof history.location !== "undefined" ? (
          <>
            {
              RESULTLIST.map((partofday) => (
                <PartOfDay
                  key={partofday.id}
                  day={partofday.day}
                  tempNumber={partofday.tempNumber}
                  tempString={partofday.tempString}
                  cloudsString={partofday.cloudsString}
                  cloudsImgNumber={partofday.cloudsImgNumber}
                  windNumber={partofday.windNumber}
                  windString={partofday.windString}
                />
              ))
            }
          </>

        ) : (
          ""
        )}

      </div >
    </>
  );
}

export default App

export const rrr = () => {
  return weather
}