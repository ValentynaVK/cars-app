import style from "./CarImageBlock.module.css";
import CarImage from "../../assets/car-image.svg?react";

import React from "react";

const CarImageBlock = ({ color }) => {
  return (
    <div className={style.carImageWrapper}>
      <CarImage className={style.carImage} style={{ fill: color }} />
    </div>
  );
};

export default CarImageBlock;
