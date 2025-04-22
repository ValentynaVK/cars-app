import logosrc from "../../assets/cars-logo.svg";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logosrc} alt="logo" />
      </a>
    </header>
  );
};

export default Header;
