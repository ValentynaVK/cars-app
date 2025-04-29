import style from "./CarsItem.module.css";

const CarsItem = ({ car }) => {
  const {
    brand,
    model,
    year,
    price,
    dealer: { name, ratings },
  } = car;

  return (
    <div className={style.card}>
      <div className={style.info}>
        <h2>
          {" "}
          {brand} {model}, {year} рік
        </h2>
        <p>
          {" "}
          Дилер - {name}. Середній рейтинг - {ratings}{" "}
        </p>
      </div>
      <div className={style.priceBlock}>
        <p className={style.price}> {price} USD </p>
        <p className={style.available}> В наявності</p>
      </div>
    </div>
  );
};

export default CarsItem;
