import style from "./CarsItem.module.css";
import { motion, AnimatePresence } from "framer-motion";

const CarsItem = ({ car, isOpen, onToggle }) => {
  const {
    brand,
    model,
    year,
    price,
    dealer: { name, location, ratings },
    features: { engine, transmission, colorOption },
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

          <button onClick={onToggle} className={style.toggleButton}>
            {isOpen ? "Згорнути" : "Детальніше"}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", marginTop: "10px" }}
          >
            <div className={style.cardBody}>
              <p>Двигун {engine}</p>
              <p>Коробка передач {transmission} </p>
              <p>Доступні кольори {colorOption} </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarsItem;
