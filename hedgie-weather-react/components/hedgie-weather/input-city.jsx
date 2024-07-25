import clsx from "clsx";

function ResButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "min-w-10 h-10 rounded-full bg-[#03b800] font-bold text-sm",
        "lg: ",
        "sm:h-[12vw] sm:min-w-[12vw] sm:text-[4vw]",
      )}
    >
      GO
    </button>
  );
}

export function InputCity({ onChange, onClick }) {
  const hendlenCityInput = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div
        className={clsx(
          "flex justify-center gap-3 pt-2 pb-2 min-w-full",
          "lg:",
          "sm:gap-[3%]",
        )}
      >
        <input
          className={clsx(
            "rounded-full h-10 bg-white pl-5 text-neutral-700 ",
            "lg:w-[100%]",
            "sm:h-[12vw] sm:text-[4vw] sm:pl-[6%]",
          )}
          type="text"
          placeholder="Введите свой город"
          onChange={hendlenCityInput}
        />
        <ResButton onClick={onClick} />
      </div>
    </>
  );
}
