import './PartOfDay.css';

function PartOfDay(props) {
  const { day, tempNumber, tempString, cloudsString, cloudsImgNumber, windNumber, windString } = props;
  return (
    < div className="time morning" >
      <div className="dis-cont-left">
        <img className="dis-img"
          src={`/icons/${cloudsImgNumber}.webp`}
          alt="logo" />
        <p className="dis-c">{tempNumber}°C</p>
      </div>

      <div className="dis-cont-right">
        <p className="dis-h">{day} {tempString}</p>
        <div className="dis-p-cont">
          <div className="dis-p-item">
            <span className="dis-p-span">•</span>
            <p className="dis-p">{cloudsString}</p>
          </div>
          <div className="dis-p-item">
            <span className="dis-p-span">•</span>
            <p className="dis-p">Ветер {windString} {windNumber}</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default PartOfDay;