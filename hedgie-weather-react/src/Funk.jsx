import App from "./App";
import { RESULTLIST } from "./PartOfDay/resultList";

function Funk({ weather }) {
    RESULTLIST[0].day = "rrr"
    console.log(weather);
}

export default Funk;