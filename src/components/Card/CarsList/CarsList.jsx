import style from "./CarsList.module.css";
import CarsItem from "../CarsItem/CarsItem";

const CarsList = ({ cars }) => {
  return (
    <div>
      {cars.map((car, index) => {
        return <CarsItem car={car} key={index} />;
      })}
    </div>
  );
};

export default CarsList;
