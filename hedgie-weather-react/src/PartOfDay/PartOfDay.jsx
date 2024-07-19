import { useState } from 'react';
import './PartOfDay.css';
import { TODAY } from './today';
import { TOMORROW } from './tomorrow';

function PartOfDay({ param }) {
  // const [carrentTab, setCarrentTab] = useState(TODAY);
  // const [btnColor, setBtnColor] = useState("#03b800");
  // const [btnColor2, setBtnColor2] = useState("#6d6d6d");

  // const hendleTabClick = (i) => {
  //   if (i === 1) {
  //     setCarrentTab(TODAY);
  //     setBtnColor("#03b800");
  //     setBtnColor2("#6d6d6d")

  //   } else if (i === 2) {
  //     setCarrentTab(TOMORROW);
  //     setBtnColor("#6d6d6d");
  //     setBtnColor2("#03b800")
  //   }


  return (
    <div className="container" >
      {param.map((tab) =>
        <div className="part-of-day" key={tab.id}>
          <div className="part-of-day-container-left">
            <img className="part-img"
              src={`/icons/${tab.cloudsImgNumber}.webp`}
              alt="logo" />
            <p className="part-celsius">{tab.tempNumber}°C</p>
          </div>
          <div className="part-of-day-container-right">
            <p className="part-header">{tab.day} {tab.tempString}</p>
            <div className="part-p-container">
              <div className="part-p-item">
                <span className="part-p-span">•</span>
                <p className="part-p">{tab.cloudsString}</p>
              </div>
              <div className="part-p-item">
                <span className="part-p-span">•</span>
                <p className="part-p">Ветер {tab.windString} {tab.windNumber} км/ч</p>
              </div>
            </div>
          </div>
        </div >
      )}
    </div >
  );
}

export default PartOfDay;