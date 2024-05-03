import ButtonRound from "../Button/ButtonRound";
import styles from "./slider.module.css";
import Reviewer1 from "../../assets/img/reviewer1.png";
import Reviewer2 from "../../assets/img/reviewer2.png";

const SliderReview = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviewsCard}>
        <h1>ОТЗЫВЫ</h1>

        <div className={styles.cardCorusel}>
          <div className={styles.card}>
            <span>
              Анна Олеговна очень заботливый доктор! Мы&nbsp;с&nbsp;малышкой
              почти сразу после рождения оказались в&nbsp;стационаре Алмазова,
              я&nbsp;узнала что у&nbsp;дочки врожденный гиперинсулинизм. Это
              редкое и&nbsp;тяжелое заболевание, мы&nbsp;прошли много
              диагностических процедур, но на&nbsp;этом пути Анна Олеговна все
              подробно объясняла, мы&nbsp;чувствовали, что
              мы&nbsp;в&nbsp;надежных руках. В&nbsp;центре нам была сделана
              операция, спасибо врачам-хирургам! <br /> Сейчас
              мы&nbsp;наблюдаемся у&nbsp;Анны Олеговны но&nbsp;уже здоровые!!!!{" "}
              <br /> Спасибо!
            </span>

            <div className={styles.cardReviewer}>
              <img src={Reviewer1} alt="" />
              <h2>
                Мама Евы, 2 года <br /> Врожденный гиперинсулинизм
              </h2>
            </div>
          </div>

          <div className={styles.card}>
            <span>
              Анна Олеговна очень заботливый доктор! Мы&nbsp;с&nbsp;малышкой
              почти сразу после рождения оказались в&nbsp;стационаре Алмазова,
              я&nbsp;узнала что у&nbsp;дочки врожденный гиперинсулинизм. Это
              редкое и&nbsp;тяжелое заболевание, мы&nbsp;прошли много
              диагностических процедур, но на&nbsp;этом пути Анна Олеговна все
              подробно объясняла, мы&nbsp;чувствовали, что
              мы&nbsp;в&nbsp;надежных руках. В&nbsp;центре нам была сделана
              операция, спасибо врачам-хирургам! <br /> Сейчас
              мы&nbsp;наблюдаемся у&nbsp;Анны Олеговны но&nbsp;уже здоровые!!!!{" "}
              <br /> Спасибо!
            </span>

            <div className={styles.cardReviewer}>
              <img src={Reviewer1} alt="" />
              <h2>
                Мама Евы, 2 года <br /> Врожденный гиперинсулинизм
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.slidernav}>
        <ButtonRound>
          <b>ᐸ</b>
        </ButtonRound>
        <ButtonRound>
          <b>ᐳ</b>
        </ButtonRound>
      </div>
    </div>
  );
};

export default SliderReview;
