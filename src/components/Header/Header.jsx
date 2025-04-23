import logosrc from "../../assets/cars-logo.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <header>
        <a href="/">
          <img src={logosrc} alt="logo" width="236" height="58" />
        </a>
      </header>
    </div>
  );
};

export default Header;
