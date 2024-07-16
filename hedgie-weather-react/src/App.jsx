import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PartOfDay from './PartOfDay/PartOfDay.jsx'
import { TODAY } from './PartOfDay/today.js'
import './App.css'
import Funk from './Funk.jsx'
import { TOMORROW } from './PartOfDay/tomorrow.js'

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
      <header className="header">
        <h1>Hedgie Weather</h1>
      </header>
      <div className="input-container">
        <input
          className="input-city"
          type="text"
          placeholder="Введите свой город"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="button-city" onClick={searchPressed}>GO</button>
      </div>
      <>
        <Funk weather={weather} />
      </>
      {typeof weather.location !== "undefined" && typeof history.location !== "undefined" ? (
        <>
          <div className="change-day-container">
            <button className="change-day-button today-button" >Сегодня</button>
            <button className="change-day-button tomorrow-button" >Завтра</button>
          </div>
          <div className="today">
            {
              TODAY.map((partofday) => (
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
          </div>
          <div className="tomorrow">
            {
              TOMORROW.map((partofday) => (
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
          </div>
        </>

      ) : (
        ""
      )}
    </>
  );
}

export default App