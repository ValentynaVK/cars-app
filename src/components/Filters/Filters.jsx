import Input from "../Input/Input";
import { useState } from "react";
import cars from "../../data/cars";

const Filters = ({ setCars }) => {
  const [brandValue, setBrandValue] = useState("");
  const [modelValue, setModelValue] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
    setCars(cars);
  };
  return (
    <div>
      <h2>Фільтри</h2>
      <form onSubmit={handleSubmit}>
        <Input
          name="brand"
          onChange={(event) => {
            setBrandValue(event.target.value);
          }}
          value={brandValue}
          label="brand"
          type="text"
          id="brandInput"
        />
        <Input
          name="model"
          onChange={(event) => {
            setModelValue(event.target.value);
          }}
          value={modelValue}
          label="model"
          type="text"
          id="modelInput"
        />
        <Input
          name="minPrice"
          onChange={(event) => {
            setMinPrice(event.target.value);
          }}
          value={minPrice}
          label="Price"
          type="number"
          id="minPriceInput"
        />
        <Input
          name="maxPrice"
          onChange={(event) => {
            setMaxPrice(event.target.value);
          }}
          value={maxPrice}
          label="max.price"
          type="number"
          id="maxPriceInput"
        />
        <Input
          name="minYear"
          onChange={(event) => {
            setMinYear(event.target.value);
          }}
          value={minYear}
          label="Year"
          type="number"
          id="minYearInput"
        />
        <Input
          name="maxYear"
          onChange={(event) => {
            setMaxYear(event.target.value);
          }}
          value={maxYear}
          label="Year"
          type="number"
          id="maxYearInput"
        />
        <Input
          name="color"
          onChange={(event) => {
            setColor(event.target.value);
          }}
          value={color}
          label="color"
          type="text"
          id="colorInput"
        />
        <button type="button" onClick={handleReset}>
          Скинути
        </button>
        <button type="submit">Застосувати</button>
      </form>
    </div>
  );
};

export default Filters;
