import style from "./Card.module.css";
import cars from "../../data/cars";
import CarsList from "./CarsList/CarsList";

const Card = () => {
  return (
    <main className={style.main}>
      <h1 className={style.title}>Пошук автомобілів</h1>
      <div className={style.carsAvailable}>
        <p className={style.label}>В наявності</p>
        <p className={style.available}>{cars.length} автомобілів</p>
      </div>
      <CarsList cars={cars} />
    </main>
  );
};

export default Card;
