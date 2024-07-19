
function ResButton({ onClick, nameButton, btnColor }) {
    return <button onClick={onClick} style={{ backgroundColor: btnColor }} className="change-day-button">{nameButton}</button>;
}

export default function TabDayPonel({ onToday, onTomorrow, color1, color2 }) {
    return (
        <div className="change-day-container">
            <ResButton onClick={onToday} nameButton={"Сегодня"} btnColor={color1} />
            <ResButton onClick={onTomorrow} nameButton={"Завтра"} btnColor={color2} />
        </div>
    );
}