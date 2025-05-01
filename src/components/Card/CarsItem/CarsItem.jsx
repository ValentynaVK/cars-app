import style from "./CarsItem.module.css";
import { useState } from "react";

const CarsItem = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    brand,
    model,
    year,
    price,
    dealer: { name, ratings },
  } = car;

  const totalRating = ratings.reduce((acc, num) => acc + num);
  const averageRating = totalRating / ratings.length;

  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div className={style.info}>
          <h2>
            {brand} {model}, {year} рік
          </h2>
          <p>
            Дилер - {name}. Середній рейтинг - {averageRating.toFixed(2)}
          </p>
        </div>
        <div className={style.priceBlock}>
          <p className={style.price}> {price} USD </p>
          <p className={style.available}> В наявності</p>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Згорнути" : "Детальніше"}
          </button>
        </div>
      </div>
      <div className={style.cardBody}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt qui
          repellendus hic minus perspiciatis odio iusto amet corporis
          voluptates? Possimus sunt ea suscipit similique rem non nulla eaque
          quo dolorem.
        </p>
      </div>
    </div>
  );
};

export default CarsItem;
