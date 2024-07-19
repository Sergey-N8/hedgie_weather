import './InputCity.css';

function InputCity({ onChange }) {

  const hendlenCityInput = (e) => {
    onChange(e.target.value)
  }

  return (
      <input
        className="input-city"
        type="text"
        placeholder="Введите свой город"
        // onChange={(e) => setSearch(e.target.value)}
        onChange={hendlenCityInput}
      />
  );
}

export default InputCity;