import './PartOfDay.css';

function PartOfDay(props) {
  const { day, tempNumber, tempString, cloudsString, cloudsImgNumber, windNumber, windString } = props;
  return (
    < div className="part-of-day" >

      <div className="part-of-day-container-left">
        <img className="part-img"
          src={`/icons/${cloudsImgNumber}.webp`}
          alt="logo" />
        <p className="part-celsius">{tempNumber}°C</p>
      </div>

      <div className="part-of-day-container-right">
        <p className="part-header">{day} {tempString}</p>
        <div className="part-p-container">
          <div className="part-p-item">
            <span className="part-p-span">•</span>
            <p className="part-p">{cloudsString}</p>
          </div>
          <div className="part-p-item">
            <span className="part-p-span">•</span>
            <p className="part-p">Ветер {windString} {windNumber}</p>
          </div>
        </div>
      </div>
    </div >
  );
}

export default PartOfDay;