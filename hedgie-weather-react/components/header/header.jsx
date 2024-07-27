import clsx from "clsx";

export function Header() {
  return (
    <header
      className={clsx(
        "text-[2.5rem] font-bold flex justify-center",
        "lg: ",
        "sm:text-[10.8vw] ",
      )}
    >
      <h1>Hedgie Weather</h1>
    </header>
  );
}
