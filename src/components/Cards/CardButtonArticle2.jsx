import Button from "../Button/Button";
import styles from "./cardbutton.module.css";

const CardButtonArticle2 = () => {
  return (
    <div className={styles.cardButton}>
      <div className={styles.cardText}>
        <h2>Половое развитие у детей</h2>
        <p>
          Сроки начала полового развития у&nbsp;детей: на&nbsp;что обратить
          внимание.
        </p>
      </div>
      <Button>Читать</Button>
    </div>
  );
};

export default CardButtonArticle2;
