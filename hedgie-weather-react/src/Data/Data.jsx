import { useState } from 'react'

export function Data({ search, callbackWeather, callbackHistoryWeather }) {

    // const conditionRus = () => JSON.parse(JSON.stringify(jsonData));

    const api = {
        keyOpenWeatherMap: "e0d048c37bdfd0ad7c604f3991f0fab3",
        keyWeatherApi: "e13fe10f11954b6aa3260206242606",
        baseLocation: "http://api.openweathermap.org/geo/1.0/",
        baseOpenWeatherMapV2_5: "https://api.openweathermap.org/data/2.5/",
        baseWeatherApi: "https://api.weatherapi.com/v1/",
    };

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

    const onClickPush = () => {
        awaitsearchPressed();
        callbackWeather(weather);
        callbackHistoryWeather(history);

    }

    return (
        <>
            <button className="button-city" onClick={onClickPush.then}>GO</button >
        </>
    )
}

export default Data;

