import style from "./CarsItem.module.css";
import { motion, AnimatePresence } from "framer-motion";

const CarsItem = ({ car, isOpen, onToggle }) => {
  const {
    brand,
    model,
    year,
    price,
    dealer: { name, ratings },
    features: { engine, transmission, colorOptions },
  } = car;

  const totalRating = ratings.reduce((acc, num) => acc + num);
  const averageRating = totalRating / ratings.length;
  const colors = colorOptions;

  return (
    <div className={style.card}>
      <div className={style.cardHeader} onClick={onToggle}>
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
              <div className={style.row}>
                <p className={style.label}>Двигун </p>
                <p className={style.value}>{engine}</p>
              </div>
              <div className={style.row}>
                <p className={style.label}>Коробка передач </p>
                <p className={style.value}>{transmission}</p>
              </div>
              <div className={style.row}>
                <p className={style.label}>Доступні кольори </p>

                <div className={style.colorWrapper}>
                  {colors.map((color, index) => (
                    <span
                      key={index}
                      className={style.colorDot}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarsItem;
