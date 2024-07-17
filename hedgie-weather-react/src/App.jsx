import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PartOfDay from './PartOfDay/PartOfDay.jsx'
import { TODAY } from './PartOfDay/today.js'
import './App.css'
import { TOMORROW } from './PartOfDay/tomorrow.js'
import InputCity from './InputCity/InputCity.jsx'
import { Data } from './Data/Data.jsx'
import WeatherFunctionDay from './WeatherFunction/WeatherFunctionDay.jsx'

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [history, setWeatherHistory] = useState({});


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
        <Data search={search} callbackWeather={setWeather} callbackHistoryWeather={setWeatherHistory}/>
      </div>
      

      <>
        <PartOfDay />
      </>

      <>
        <WeatherFunctionDay weather={weather} history={history}/>
      </>
      {/* {typeof weather.location !== "undefined" && typeof history.location !== "undefined" ? (
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
      )} */}
    </>
  );
}

export default App