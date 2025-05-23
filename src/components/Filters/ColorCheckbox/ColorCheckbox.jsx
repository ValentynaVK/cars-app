import checkIcon from "../../../assets/check.svg";
import style from "./ColorCheckbox.module.css";

const ColorCheckbox = ({ color, checked, onChange }) => {
  const handleClick = () => {
    onChange(color);
  };

  return (
    <label
      className={`${style.checkbox} ${checked ? style.checked : ""}`}
      style={{ backgroundColor: color }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleClick}
        className={style.inputHidden}
      />
      {checked && (
        <div className={style.checkIcon}>
          <img src={checkIcon} alt="check" />
        </div>
      )}
    </label>
  );
};

export default ColorCheckbox;
