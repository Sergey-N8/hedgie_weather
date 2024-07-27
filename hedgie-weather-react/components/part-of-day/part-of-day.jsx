import clsx from "clsx";
import ImageClouds from "next/image";

function TempText({ tempNumber }) {
  return <p className="font-light text-3xl sm:text-[5vw]">{tempNumber}°C</p>;
}

function HeaderText({ day, tempString }) {
  return (
    <p className="font-bold text-3xl sm:text-[5vw] sm:leading-[7.5vw] sm:pb-[0.5%]">
      {day} {tempString}
    </p>
  );
}

function CloudsText({ cloudsString }) {
  return (
    <div className="flex gap-1">
      <span className="text-2xl leading-3">•</span>
      <p className="part-p">{cloudsString}</p>
    </div>
  );
}

function WindText({ windString, windNumber }) {
  return (
    <div className="flex gap-1">
      <span className="text-2xl leading-3">•</span>
      <p className="part-p">
        Ветер {windString} {windNumber} км/ч
      </p>
    </div>
  );
}

export function PartOfDay({ tabDayParam }) {
  return (
    <div className="flex flex-col gap-5 pt-5">
      {tabDayParam.map((item) => (
        <div className="flex gap-[4%]" key={item.id}>
          <div className="flex flex-col items-center bg-black/20 w-[18%] lg: sm:">
            <ImageClouds
              src={`https://cdn.weatherapi.com/weather/64x64/day/${item.cloudsImgNumber}.png`}
              alt="External Image"
              width={64}
              height={64}
              className="w-[80%]"
            />
            <TempText tempNumber={item.tempNumber} />
          </div>
          <div className="w-[78%]">
            <HeaderText day={item.day} tempString={item.tempString} />

            <CloudsText cloudsString={item.cloudsString} />

            <WindText
              windString={item.windString}
              windNumber={item.windNumber}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
