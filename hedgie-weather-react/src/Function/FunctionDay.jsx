import { TODAY } from "../PartOfDay/today";
import { TOMORROW } from "../PartOfDay/tomorrow";

export const FunctionDay = ({ weather, history }) => {

    const arrTempNamber = [
        weather.forecast.forecastday[0].hour[8].temp_c,
        weather.forecast.forecastday[0].day.maxtemp_c,
        weather.forecast.forecastday[0].hour[20].temp_c,
        weather.forecast.forecastday[1].hour[8].temp_c,
        weather.forecast.forecastday[1].day.maxtemp_c,
        weather.forecast.forecastday[1].hour[20].temp_c
    ];

    const sensTemp = (arrTempNamber) => {
        const arrTempStr = [];
        for (let i = 0; i < arrTempNamber.length; i++) {
            if (arrTempNamber[i] < -25) {
                arrTempStr.push("очень холодно");
            } else if (arrTempNamber[i] < -10) {
                arrTempStr.push("мороз");
            } else if (arrTempNamber[i] < 5) {
                arrTempStr.push("холодно");
            } else if (arrTempNamber[i] < 15) {
                arrTempStr.push("прохладно");
            } else if (arrTempNamber[i] < 25) {
                arrTempStr.push("комфортно");
            } else if (arrTempNamber[i] < 32) {
                arrTempStr.push("жарко");
            } else {
                arrTempStr.push("очень жарко");
            }
        }
        return arrTempStr;
    };



    //console.log(weather.forecast.forecastday[1].day.maxtemp_c); 

    for (let i = 0; i < arrTempNamber.length; i++) {
        if (i < 3) {
            TODAY[i].tempNumber = Math.round(arrTempNamber[i]);
            TODAY[i].tempString = sensTemp(arrTempNamber)[i];
        } else {
            TOMORROW[i-3].tempNumber = Math.round(arrTempNamber[i]);
            TOMORROW[i-3].tempString = sensTemp(arrTempNamber)[i];
        }
    }


    // const conditionCode = () => {
    //     const conditionNumMor = Math.max(weather.forecast.forecastday[0].hour[6].condition.code,
    //         weather.forecast.forecastday[0].hour[7].condition.code,
    //         weather.forecast.forecastday[0].hour[8].condition.code,
    //         weather.forecast.forecastday[0].hour[9].condition.code);
    //     const conditionNumNoon = Math.max(weather.forecast.forecastday[0].hour[10].condition.code,
    //         weather.forecast.forecastday[0].hour[11].condition.code,
    //         weather.forecast.forecastday[0].hour[12].condition.code,
    //         weather.forecast.forecastday[0].hour[13].condition.code,
    //         weather.forecast.forecastday[0].hour[14].condition.code,
    //         weather.forecast.forecastday[0].hour[15].condition.code,
    //         weather.forecast.forecastday[0].hour[16].condition.code,
    //         weather.forecast.forecastday[0].hour[17].condition.code,
    //         weather.forecast.forecastday[0].hour[18].condition.code,
    //         weather.forecast.forecastday[0].hour[19].condition.code);
    //     const conditionNumEven = Math.max(weather.forecast.forecastday[0].hour[20].condition.code,
    //         weather.forecast.forecastday[0].hour[21].condition.code,
    //         weather.forecast.forecastday[0].hour[22].condition.code,
    //         weather.forecast.forecastday[0].hour[23].condition.code);
    //     const conditionArr = [conditionNumMor, conditionNumNoon, conditionNumEven];
    //     const conditionArrRes = [];
    //     for (let i = 0; i < conditionArr.length; i++) {
    //         for (let e of conditionRus()) {
    //             if (e.code === conditionArr[i]) {
    //                 conditionArrRes.push(e.day_text);
    //                 conditionArrRes.push(e.night_text);
    //                 conditionArrRes.push(e.icon);
    //             }
    //         }
    //     }
    //     return conditionArrRes;
    // };

    // const windPowerList = (day) => {
    //     const result = []
    //     for (let i = 0; i < weather.forecast.forecastday[day].hour.length; i++) {
    //         result.push(weather.forecast.forecastday[day].hour[i].wind_kph);
    //     }
    //     const windPowerFeelsLike = (wind) => {
    //         let feelsLike = " ";
    //         if (wind < 10) {
    //             feelsLike = "слабый";
    //             return feelsLike;
    //         } else if (wind < 25) {
    //             feelsLike = "умеренный";
    //             return feelsLike;
    //         } else if (wind < 40) {
    //             feelsLike = "сильный";
    //             return feelsLike;
    //         } else {
    //             feelsLike = "внимание ураган!";
    //             return feelsLike;
    //         }
    //     };

    //     TODAY[0].windString = windPowerFeelsLike(TODAY[0].windNumber = Math.max(windPowerList(0).slice(6, 9)));
    //     TODAY[1].windString = windPowerFeelsLike(TODAY[1].windNumber = Math.max(windPowerList(0).slice(10, 19)));
    //     TODAY[2].windString = windPowerFeelsLike(TODAY[2].windNumber = Math.max(windPowerList(0).slice(20, 23)));
    //     TOMORROW[0].windString = windPowerFeelsLike(TOMORROW[0].windNumber = Math.max(windPowerList(0).slice(6, 9)));
    //     TOMORROW[1].windString = windPowerFeelsLike(TOMORROW[1].windNumber = Math.max(windPowerList(0).slice(10, 19)));
    //     TOMORROW[2].windString = windPowerFeelsLike(TOMORROW[2].windNumber = Math.max(windPowerList(0).slice(20, 23)));
    // };


    // TODAY[0].tempNumber = Math.round(arrTempNamber[0]);
    // TODAY[0].tempString = sensTemp(arrTempNamber)[0];
    // TODAY[0].cloudsString = conditionCode()[0],
    // TODAY[0].cloudsImgNumber = conditionCode()[2]
}