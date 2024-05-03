import Button from "../Button/Button";
import styles from "./cardbutton.module.css";

const CardButtonArticle1 = () => {
  return (
    <div className={styles.cardButton}>
      <div className={styles.cardText}>
        <h2>Запись на оффлайн прием в клинике</h2>
        <p>
          Вместе мы&nbsp;простыми словами говорим о&nbsp;диабете и&nbsp;других
          заб,
        </p>
      </div>
      <Button>Записаться</Button>
    </div>
  );
};

export default CardButtonArticle1;
