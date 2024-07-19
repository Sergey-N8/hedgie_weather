import { useEffect, useState } from 'react'
import PartOfDay from './PartOfDay/PartOfDay.jsx'
import { TODAY } from './PartOfDay/today.js'
import { TOMORROW } from './PartOfDay/tomorrow.js'
import './App.css'
import InputCity from './InputCity/InputCity.jsx'
import { FunctionDay } from './Function/FunctionDay.jsx'
import Data from './Data/Data.jsx'
import TabDayPonel from './TabDayPonel/TabDayPonel.jsx'
import Header from './Header/Header.jsx'


function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [history, setWeatherHistory] = useState({});
  const [tabDay, setTabDay] = useState(TODAY); 
  const [btnColor1, setBtnColor1] = useState("#03b800"); 
  const [btnColor2, setBtnColor2] = useState("#6d6d6d");

  const choseTabDay = (nam) => {
    if (nam === 1) {
      setTabDay(TODAY)
      setBtnColor1("#03b800");
      setBtnColor2("#6d6d6d");
    } else if (nam === 2) {
      setTabDay(TOMORROW)
      setBtnColor1("#6d6d6d");
      setBtnColor2("#03b800");
    }
  }

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
      <Header/>

      <div className="input-container">
        <InputCity
          onChange={hendlenCityInput}
        />
        <button className="button-city" onClick={searchPressed}>GO</button >
      </div>

      {typeof weather.location !== "undefined" ? (

        <>
          <FunctionDay
            weather={weather}
            history={history}
          />

          <TabDayPonel
            onToday={() => choseTabDay(1)}
            onTomorrow={() => choseTabDay(2)}
            color1={btnColor1}
            color2={btnColor2}
          />

          <PartOfDay
            param={tabDay}
          />
        </>

      ) : (
        ""
      )}
    </>
  );
}

export default App