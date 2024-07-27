import { useState } from "react";
import { TODAY } from "../function/today";
import { TOMORROW } from "../function/tomorrow";

export function useTabDayPonel() {
  const [tabDay, setTabDay] = useState(TODAY);
  const [btnColor1, setBtnColor1] = useState("#03b800");
  const [btnColor2, setBtnColor2] = useState("#6d6d6d");

  const choseTabDay = (nam) => {
    if (nam === 1) {
      setTabDay(TODAY);
      setBtnColor1("#03b800");
      setBtnColor2("#6d6d6d");
    } else if (nam === 2) {
      setTabDay(TOMORROW);
      setBtnColor1("#6d6d6d");
      setBtnColor2("#03b800");
    }
  };

  return {
    tabDay,
    btnColor1,
    btnColor2,
    choseTabDay,
  };
}
