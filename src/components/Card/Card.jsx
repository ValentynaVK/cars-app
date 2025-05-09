import style from "./Card.module.css";
import cars from "../../data/cars";
import CarsList from "./CarsList/CarsList";
import { useState } from "react";
import Filters from "../Filters/Filters";

const Card = () => {
  const [sortedCars, setSortedCars] = useState(cars);
  const [isSorted, setIsSorted] = useState(false);
  const sortCarsByAsc = ({ cars }) => {
    setSortedCars(cars.toSorted((a, b) => a.price - b.price));
    setIsSorted(true);
  };

  const sortCarsByDesc = ({ cars }) => {
    setSortedCars(cars.toSorted((a, b) => b.price - a.price));
    setIsSorted(true);
  };

  const resetSorting = () => {
    setSortedCars(cars);
    setIsSorted(false);
  };
  return (
    <main className={style.main}>
      <h1 className={style.title}>Пошук автомобілів</h1>
      <div className={style.carsAvailable}>
        <p className={style.label}>В наявності</p>
        <p className={style.available}>{cars.length} автомобілів</p>
      </div>
      <Filters setCars={setSortedCars} />
      <div className={style.sortBtnsWrapper}>
        <button
          className={style.sortBtn}
          type="button"
          onClick={() => sortCarsByAsc({ cars })}
        >
          Спочатку дешеві{" "}
        </button>

        <button
          className={style.sortBtn}
          type="button"
          onClick={() => sortCarsByDesc({ cars })}
        >
          Спочатку дорогі
        </button>
        {isSorted && (
          <button
            className={style.resetBtn}
            type="button"
            onClick={resetSorting}
          >
            Очистити
          </button>
        )}
      </div>

      <CarsList cars={sortedCars} />
    </main>
  );
};

export default Card;
