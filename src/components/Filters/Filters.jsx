import Input from "../Input/Input";
import { useState } from "react";
import cars from "../../data/cars";

const Filters = ({ setCars }) => {
  const [brandValue, setBrandValue] = useState("");
  const [modelValue, setModelValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCars(
      cars.filter((car) =>
        car.brand.toLowerCase().includes(brandValue.toLowerCase())
      )
    );

    console.log(brandValue);
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
        <button type="submit">Застосувати</button>
      </form>
    </div>
  );
};

export default Filters;
