import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PartOfDay from './PartOfDay/PartOfDay.jsx'
import { TODAY } from './PartOfDay/today.js'
import './App.css'
import { TOMORROW } from './PartOfDay/tomorrow.js'
import InputCity from './InputCity/InputCity.jsx'
import Data from './Data/Data.jsx'
import { FunctionDay } from './Function/FunctionDay.jsx'
// import WeatherFunctionDay from './WeatherFunction/WeatherFunctionDay.jsx'

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [history, setWeatherHistory] = useState({});
  // weather={weather} history={history}


  const hendlenCityInput = (search) => {
    setSearch(search)
  }




  // const hendlenClickButtonCity = (click) => {
  //   setClick(click)
  // }

  // console.log(click);

  // click={click}

  // onClick={hendlenClickButtonCity}


  // useEffect(() => {
  //   const connection = createConnection(serverUrl, roomId);
  //   connection.connect();
  //   return () => {
  //     connection.disconnect();
  //   };
  // }, [serverUrl, roomId]);


  return (
    <>
      <header className="header">
        <h1>Hedgie Weather</h1>
      </header>

      <div className="input-container">
        <InputCity onChange={hendlenCityInput} />
        <Data search={search} callbackWeather={setWeather} callbackHistoryWeather={setWeatherHistory} />
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