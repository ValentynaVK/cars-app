import checkIcon from "../../../assets/check.svg";
import style from "./ColorCheckbox.module.css";

const ColorCheckbox = () => {
  return (
    <label className={style.checkbox}>
      <input type="checkbox" />
      <div className={style.checkIcon}>
        <img src={checkIcon} alt="check" />
      </div>
    </label>
  );
};

export default ColorCheckbox;
