import { useState } from "react";
import { Header } from "../components/header/header.jsx";
import { InputCity } from "../components/input-city/input-city.jsx";
import { PartOfDay } from "../components/part-of-day/part-of-day.jsx";
import { TabDayPonel } from "../components/tab-day-ponel/tab-day-ponel.jsx";
import { useTabDayPonel } from "../components/tab-day-ponel/use-tab-day-ponel.jsx";
import { FunctionDay } from "../components/function/function-part-of-day.jsx";
import clsx from "clsx";
// import { Www } from "../components/hedgie-weather/part-of-day/function/www.jsx";

export default function HomePage() {
  const { tabDay, btnColor1, btnColor2, choseTabDay } = useTabDayPonel();

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [history, setWeatherHistory] = useState({});

  const hendlenCityInput = (search) => {
    setSearch(search);
  };

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
    const result =
      yesterday.getFullYear() +
      "-" +
      String(yesterday.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(yesterday.getDate()).padStart(2, "0");
    return result;
  };
  const searchPressed = () => {
    Promise.all([
      fetch(
        `${api.baseWeatherApi}/forecast.json?key=${api.keyWeatherApi}&q=${search}&days=2&aqi=no&alerts=no}`,
      ),
      fetch(
        `${api.baseWeatherApi}/history.json?key=${
          api.keyWeatherApi
        }&q=${search}&dt=${getYesterdayDate()}`,
      ),
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([dataWeather, dataHistory]) => {
        setWeather(dataWeather);
        setWeatherHistory(dataHistory);
      });
  };

  return (
    <div
      className={clsx(
        "pl-4 pr-4 max-w-3xl",
        "lg:min-w-3xl mx-auto",
        "sm:pl-2 sm:pr-2",
      )}
    >
      <Header />

      <InputCity onChange={hendlenCityInput} onClick={searchPressed} />

      <useData search={search} />

      {/* <Www/> */}

      {typeof weather.location !== "undefined" ? (
        <>
          <FunctionDay weather={weather} history={history} />

          <TabDayPonel
            onToday={() => choseTabDay(1)}
            onTomorrow={() => choseTabDay(2)}
            color1={btnColor1}
            color2={btnColor2}
          />

          <PartOfDay tabDayParam={tabDay} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
