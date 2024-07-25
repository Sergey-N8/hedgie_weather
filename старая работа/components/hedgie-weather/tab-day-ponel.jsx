import clsx from "clsx";

function ResButton({ onClick, nameButton, btnColor }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: btnColor }}
      className={clsx(
        "rounded-full h-10 w-1/2",
        "lg:",
        "sm:h-[12vw] sm:text-[4vw]",
      )}
    >
      {nameButton}
    </button>
  );
}

export function TabDayPonel({ onToday, onTomorrow, color1, color2 }) {
  return (
    <div className={clsx("flex gap-3 pt-2 pb-2", "lg:", "sm:")}>
      <ResButton onClick={onToday} nameButton={"Сегодня"} btnColor={color1} />
      <ResButton onClick={onTomorrow} nameButton={"Завтра"} btnColor={color2} />
    </div>
  );
}
