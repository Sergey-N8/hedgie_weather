import { TODAY } from "../PartOfDay/today";
import { TOMORROW } from "../PartOfDay/tomorrow";

export function WeatherFunctionDay({ weather, history }) {
    console.log(weather.forecast); 

    // const arrStart = [weather.forecast.forecastday[0].hour[8].temp_c, weather.forecast.forecastday[0].day.maxtemp_c, weather.forecast.forecastday[0].hour[20].temp_c];

    // const sensTemp = (arrStart) => {
    //     const arrResult = [];
    //     for (let i = 0; i < arrStart.length; i++) {
    //         if (arrStart[i] < -25) {
    //             arrResult.push("очень холодно");
    //         } else if (arrStart[i] < -10) {
    //             arrResult.push("мороз");
    //         } else if (arrStart[i] < 5) {
    //             arrResult.push("холодно");
    //         } else if (arrStart[i] < 15) {
    //             arrResult.push("прохладно");
    //         } else if (arrStart[i] < 25) {
    //             arrResult.push("комфортно");
    //         } else if (arrStart[i] < 32) {
    //             arrResult.push("жарко");
    //         } else {
    //             arrResult.push("очень жарко");
    //         }
    //     }
    //     return arrResult;
    // };


    // TODAY[0].tempNumber = arrStart[0]
    // TODAY[0].tempString = sensTemp(arrStart)[0]
    // cloudsString: "облочно",
    // cloudsImgNumber: 113,
    // windNumber: 7,
    // windString: "умеренный"
}

export default WeatherFunctionDay;