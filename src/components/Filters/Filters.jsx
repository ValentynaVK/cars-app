import Input from "../Input/Input";
import { useState } from "react";
import cars from "../../data/cars";
import style from "./Filters.module.css";

const Filters = ({ setCars }) => {
  const [brandValue, setBrandValue] = useState("");
  const [modelValue, setModelValue] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (minYear && maxYear && parseInt(minYear) > parseInt(maxYear)) {
      setError("Неправильний діапазон дат.");
      return;
    }

    if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
      setError("Неправильний діапазон цін.");
      return;
    }
    setError("");

    const filtered = cars.filter((car) => {
      const brandMatch = car.brand
        .toLowerCase()
        .includes(brandValue.toLowerCase());
      const modelMatch = car.model
        .toLowerCase()
        .includes(modelValue.toLowerCase());

      const yearMatch =
        (!minYear || car.year >= parseInt(minYear)) &&
        (!maxYear || car.year <= parseInt(maxYear));

      const priceMatch =
        (!minPrice || car.price >= parseInt(minPrice)) &&
        (!maxPrice || car.price <= parseInt(maxPrice));

      const colorMatch =
        !color || car.features.colorOptions.includes(color.toLowerCase());

      return brandMatch && modelMatch && yearMatch && priceMatch && colorMatch;
    });
    setCars(filtered);
  };

  const handleReset = () => {
    setBrandValue("");
    setModelValue("");
    setMinYear("");
    setMaxYear("");
    setMinPrice("");
    setMaxPrice("");
    setColor("");
    setError("");
    setCars(cars);
  };
  return (
    <div>
      <h2 className={style.headerText}>Фільтри</h2>
      {error && <p className={style.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit} className={style.filtersForm}>
        <div className={style.inputGroup}>
          <label className={style.label}>Ім'я</label>
          <Input
            className={style.input}
            name="brand"
            placeholder="Ваше ім'я"
            onChange={(event) => {
              setBrandValue(event.target.value);
            }}
            value={brandValue}
            type="text"
            id="brandInput"
          />
        </div>
        <div className={style.inputGroup}>
          <label className={style.label}>Модель</label>
          <Input
            className={style.input}
            name="model"
            placeholder="Camry"
            onChange={(event) => {
              setModelValue(event.target.value);
            }}
            value={modelValue}
            type="text"
            id="modelInput"
          />
        </div>

        <div className={style.rangeGroup}>
          <label className={style.label}>Ціна</label>
          <div className={style.doubleInput}>
            <Input
              className={style.rangeInput}
              name="minPrice"
              placeholder="Від"
              onChange={(event) => {
                setMinPrice(event.target.value);
              }}
              value={minPrice}
              type="number"
              id="minPriceInput"
            />
            <span>-</span>
            <Input
              className={style.rangeInput}
              name="maxPrice"
              placeholder="До"
              onChange={(event) => {
                setMaxPrice(event.target.value);
              }}
              value={maxPrice}
              type="number"
              id="maxPriceInput"
            />
          </div>
        </div>

        <div className={style.rangeGroup}>
          <label className={style.label}> Рік</label>
          <div className={style.doubleInput}>
            <Input
              className={style.rangeInput}
              name="minYear"
              placeholder="Від"
              onChange={(event) => {
                setMinYear(event.target.value);
              }}
              value={minYear}
              type="number"
              id="minYearInput"
            />
            <span>-</span>
            <Input
              className={style.rangeInput}
              name="maxYear"
              placeholder="До"
              onChange={(event) => {
                setMaxYear(event.target.value);
              }}
              value={maxYear}
              type="number"
              id="maxYearInput"
            />
          </div>
        </div>
        <div className={style.inputGroup}>
          <label className={style.label}>Колір</label>
          <Input
            className={style.input}
            name="color"
            onChange={(event) => {
              setColor(event.target.value);
            }}
            value={color}
            type="text"
            id="colorInput"
          />
        </div>
        <div className={style.buttons}>
          <button
            className={style.resetBtn}
            type="button"
            onClick={handleReset}
          >
            Скинути
          </button>
          <button className={style.applyBtn} type="submit">
            Застосувати
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
