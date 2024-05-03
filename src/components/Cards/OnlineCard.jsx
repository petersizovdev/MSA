import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./cardbutton.module.css";

const OnlineCard = () => {
  const [isActive, setIsActive] = useState("first");

  return (
    <>
      {isActive === "first" && (
        <div className={styles.cardButtonOffline}>
          <div className={styles.cardText}>
            <h2>Запись на онлайн-консультацию</h2>
            <p>
              Онлайн-консультация возможна после первичного очного приема
              с&nbsp;целью обсуждения результатов обследования, разъяснения
              рекомендаций, разработке дальнейшего плана наблюдения
              и&nbsp;лечения. <br />
              Пациентов с&nbsp;диабетом консультирую онлайн по&nbsp;дневникам
              питания, отчетам сенсоров и&nbsp;отчетов инсулиновых помп. Буду
              рада помочь в&nbsp;коррекции инсулинотерапии для достижения
              лучшего контроля диабета!
            </p>
          </div>

          <Button onClick={() => setIsActive("second")}>Записаться</Button>
        </div>
      )}

      {isActive === "second" && (
        <div className={styles.cardButtonOffline}>
          <div className={styles.cardForm}>
            <h2>Запись на онлайн-консультацию</h2>
            <form action="">
              <label className={styles.formRow} htmlFor="fio">
                ФИО
                <input type="name" id="fio" />
              </label>
              <label className={styles.formRow} htmlFor="date">
                Дата записи
                <input type="text" id="date" />
              </label>

              <label className={styles.formRow} htmlFor="msg">
                Комментарий
                <textarea name="message" id="msg"></textarea>
              </label>
            </form>
          </div>
          <Button onClick={() => setIsActive("third")}>Записаться</Button>
        </div>
      )}

      {isActive === "third" && (
        <div className={styles.cardButtonOffline}>
          <div className={styles.cardForm}>
            <h2>Вы успешно записаны на прием!</h2>
          </div>
          <Link to="/service">
            <Button>Ок</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default OnlineCard;
