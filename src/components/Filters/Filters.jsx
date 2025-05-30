import Input from "../Input/Input";
import { useState } from "react";
import cars from "../../data/cars";
import style from "./Filters.module.css";
import ColorCheckbox from "./ColorCheckbox/ColorCheckbox";

const Filters = ({ setCars }) => {
  const [formState, setFormState] = useState({
    brand: "",
    model: "",
    minYear: "",
    maxYear: "",
    minPrice: "",
    maxPrice: "",
    selectedColors: [],
  });

  const [priceError, setPriceError] = useState("");
  const [yearError, setYearError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const toggleColor = (color) => {
    setFormState((prev) => ({
      ...prev,
      selectedColors: prev.selectedColors.includes(color)
        ? prev.selectedColors.filter((c) => c !== color)
        : [...prev.selectedColors, color],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const {
      brand,
      model,
      minYear,
      maxYear,
      minPrice,
      maxPrice,
      selectedColors,
    } = formState;

    if (minYear && maxYear && parseInt(minYear) > parseInt(maxYear)) {
      setYearError("Неправильний діапазон дат.");
      return;
    }

    if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
      setPriceError("Неправильний діапазон цін.");
      return;
    }
    setPriceError("");
    setYearError("");

    const filtered = cars.filter((car) => {
      const brandMatch = car.brand.toLowerCase().includes(brand.toLowerCase());
      const modelMatch = car.model.toLowerCase().includes(model.toLowerCase());

      const yearMatch =
        (!minYear || car.year >= parseInt(minYear)) &&
        (!maxYear || car.year <= parseInt(maxYear));

      const priceMatch =
        (!minPrice || car.price >= parseInt(minPrice)) &&
        (!maxPrice || car.price <= parseInt(maxPrice));

      const colorMatch =
        selectedColors.length === 0 ||
        selectedColors.some((selectedColor) =>
          car.features.colorOptions.some(
            (carColor) => carColor.toLowerCase() === selectedColor.toLowerCase()
          )
        );

      return brandMatch && modelMatch && yearMatch && priceMatch && colorMatch;
    });
    setCars(filtered);
  };

  const handleReset = () => {
    setFormState({
      brand: "",
      model: "",
      minYear: "",
      maxYear: "",
      minPrice: "",
      maxPrice: "",
      selectedColors: [],
    });
    setPriceError("");
    setYearError("");
    setCars(cars);
  };

  const filteredByBrandModel = cars.filter((car) => {
    const brandMatch = car.brand
      .toLowerCase()
      .includes(formState.brand.toLowerCase());
    const modelMatch = car.model
      .toLowerCase()
      .includes(formState.model.toLowerCase());
    return brandMatch && modelMatch;
  });

  const uniqueColors = Array.from(
    new Set(filteredByBrandModel.flatMap((car) => car.features.colorOptions))
  );

  return (
    <div className={style.filtersWrapper}>
      <h2 className={style.headerText}>Фільтри</h2>

      <form onSubmit={handleSubmit} className={style.filtersForm}>
        <div className={style.formFields}>
          <div className={style.inputGroup}>
            <label className={style.label}>Ім'я</label>
            <Input
              className={style.input}
              name="brand"
              placeholder="Ваше ім'я"
              onChange={handleChange}
              value={formState.brand}
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
              onChange={handleChange}
              value={formState.model}
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
                onChange={handleChange}
                value={formState.minPrice}
                type="number"
                id="minPriceInput"
              />
              <span>-</span>
              <Input
                className={style.rangeInput}
                name="maxPrice"
                placeholder="До"
                onChange={handleChange}
                value={formState.maxPrice}
                type="number"
                id="maxPriceInput"
              />
            </div>
            {priceError && <p className={style.errorMessage}>{priceError}</p>}
          </div>
          <div className={style.rangeGroup}>
            <label className={style.label}> Рік</label>
            <div className={style.doubleInput}>
              <Input
                className={style.rangeInput}
                name="minYear"
                placeholder="Від"
                onChange={handleChange}
                value={formState.minYear}
                type="number"
                id="minYearInput"
              />
              <span>-</span>
              <Input
                className={style.rangeInput}
                name="maxYear"
                placeholder="До"
                onChange={handleChange}
                value={formState.maxYear}
                type="number"
                id="maxYearInput"
              />
            </div>
            {yearError && <p className={style.errorMessage}>{yearError}</p>}
          </div>
          <div>
            <p className={style.label}>Колір</p>
            <ul className={style.colorCheckboxList}>
              {uniqueColors.map((color) => (
                <li key={color}>
                  <ColorCheckbox
                    color={color}
                    checked={formState.selectedColors.includes(color)}
                    onChange={toggleColor}
                  />
                </li>
              ))}
            </ul>
          </div>
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
