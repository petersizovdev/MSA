import Button from "../Button/Button";
import styles from "./cardbutton.module.css";

const CardButtonArticle1 = () => {
  return (
    <div className={styles.cardButton}>
      <div className={styles.cardText}>
        <h2>Диагностика диабета</h2>
        <p>
          Симптомы, которые указывают на&nbsp;диабет. Разработка плана
          диагностики.
        </p>
      </div>
      <Button>Читать</Button>
    </div>
  );
};

export default CardButtonArticle1;
