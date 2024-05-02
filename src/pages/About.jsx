import AboutCards from "../components/Cards/AboutCards";
import HeroAbout from "../components/Hero/HeroAbout";
import HeroList from "../components/Hero/HeroList";
import HeroSecond from "../components/Hero/HeroSecond";
import "../App.css";
import Button from "../components/Button/Button";

const About = () => {
  return (
    <>
      <HeroAbout />
      <AboutCards />
      <HeroSecond />
      <HeroList />
      <div className="important">
        <div className="importantCard">
          <h1>ВАЖНО</h1>
          <p>
            В&nbsp;10, 15, 16&nbsp;и&nbsp;17&nbsp;лет согласно приказу Минздрава
            должны осуществляться профилактические осмотры детей детским
            эндокринологом. На&nbsp;консультации проводится исключение
            эндокринной патологии, обсуждаются рекомендации по&nbsp;здоровому
            образу жизни, обсуждение волнующих подростков вопросов.
          </p>
          <Button>Записаться</Button>
        </div>
      </div>
    </>
  );
};

export default About;
