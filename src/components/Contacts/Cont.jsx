import Button from "../Button/Button";
import styles from "./cont.module.css";
import Map1 from "../../assets/img/map1.png";
import Map2 from "../../assets/img/map2.png";

const Cont = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.leftColumn}>
          <h2>Оффлайн прием</h2>
          <p>
            г.Санкт-Петербург ФГБУ Национальный медицинский исследовательский
            центр им. В.А. Алмазова Минздрава <br /> России Коломяжский
            проспект 21
          </p>

          <Button>Записаться</Button>
        </div>

        <img src={Map1} alt="" />
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.leftColumn}>
          <h2>Онлайн прием</h2>
          <p>г.Гатчина клиника «Бейби-мед» ул.Госпитальный переулок 15а</p>
          <Button>Записаться</Button>
        </div>
        <img src={Map2} alt="" />
      </div>
    </div>
  );
};

export default Cont;
