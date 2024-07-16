import App from "./App";
import { TODAY } from "./PartOfDay/today";
import { TOMORROW } from "./PartOfDay/tomorrow";

function Funk({ weather }) {
    TODAY[0].day = "rrr"
    console.log(weather);
}

export default Funk;