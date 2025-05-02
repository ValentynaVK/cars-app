import style from "./CarsList.module.css";
import CarsItem from "../CarsItem/CarsItem";
import { useState } from "react";

const CarsList = ({ cars }) => {
  const [openCarId, setOpenCarId] = useState(null);

  const handleToggle = (id) => {
    setOpenCarId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {cars.map((car, index) => {
        return (
          <CarsItem
            car={car}
            key={index}
            isOpen={openCarId === car}
            onToggle={() => handleToggle(car)}
          />
        );
      })}
    </div>
  );
};

export default CarsList;
