import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <footer>
        <p className={style.text}>2024 &copy; Всі права захищені</p>
      </footer>
    </div>
  );
};

export default Footer;
