import styles from "./header.module.css";
import Logo from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="/">
        <img src={Logo} alt="" />
      </a>
      <ul className={styles.nav}>
        <li><a href="/">Главная</a></li>
        <li><a href="/about">Обо мне</a></li>
        <li><a href="/services">Услуги</a></li>
        <li><a href="/blog">Блог</a></li>
        <li><a href="/contacts">Контакты</a></li>
      </ul>
    </div>
  );
};

export default Header;
