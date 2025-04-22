import logosrc from "../../assets/cars-logo.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <a href="/">
        <img src={logosrc} alt="logo" />
      </a>
    </header>
  );
};

export default Header;
