import style from "./CarsItem.module.css";

const CarsItem = ({ car }) => {
  return (
    <div>
      {car.brand}
      {car.model}
    </div>
  );
};

export default CarsItem;
