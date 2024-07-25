import clsx from "clsx";
import Image from "next/image";


export function PartOfDay({ tabDayParam }) {
  return (
    <div className="flex flex-col gap-5 pt-5">
      {tabDayParam.map((item) => (
        <div className="flex gap-[4%]" key={item.id}>
          <div
            className={clsx(
              "flex flex-col items-center bg-black/20",
              "lg:h-[21vw]",
              "sm:",
            )}
          >
            <Image
              src={`./icons/${item.cloudsImgNumber}.webp`}
              alt="logo"
              className="part-img"
            />
            {/* <img className="part-img"
              src={`../icons/${item.cloudsImgNumber}.webp`}
              alt="logo" /> */}
            <p className="part-celsius">{item.tempNumber}°C</p>
          </div>
          <div className="part-of-day-container-right">
            <p className="part-header">
              {item.day} {item.tempString}
            </p>
            <div className="part-p-container">
              <div className="part-p-item">
                <span className="part-p-span">•</span>
                <p className="part-p">{item.cloudsString}</p>
              </div>
              <div className="part-p-item">
                <span className="part-p-span">•</span>
                <p className="part-p">
                  Ветер {item.windString} {item.windNumber} км/ч
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
