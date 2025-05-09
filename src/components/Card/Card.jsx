import style from "./Card.module.css";
import cars from "../../data/cars";
import CarsList from "./CarsList/CarsList";
import { useState } from "react";

const Card = () => {
  const [sortedCars, setSortedCars] = useState(cars);
  const sortCarsByAsc = ({ cars }) => {
    setSortedCars(cars.toSorted((a, b) => a.price - b.price));
  };

  const sortCarsByDesc = ({ cars }) => {
    setSortedCars(cars.toSorted((a, b) => b.price - a.price));
  };
  return (
    <main className={style.main}>
      <h1 className={style.title}>Пошук автомобілів</h1>
      <div className={style.carsAvailable}>
        <p className={style.label}>В наявності</p>
        <p className={style.available}>{cars.length} автомобілів</p>
      </div>

      <button type="button" onClick={() => sortCarsByAsc({ cars })}>
        Спочатку дешеві{" "}
      </button>

      <button type="button" onClick={() => sortCarsByDesc({ cars })}>
        Спочатку дорогі
      </button>

      <CarsList cars={sortedCars} />
    </main>
  );
};

export default Card;
