import { Link } from 'react-router-dom';
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
      <Link to="/service">
            <Button >Читать</Button>
          </Link>
    </div>
  );
};

export default CardButtonArticle1;
