import HomeCards from '../components/Cards/HomeCards';
import Hero from "../components/Hero/Hero";
import HeroList from '../components/Hero/HeroList';
import HeroSecond from '../components/Hero/HeroSecond';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeCards/>
      <HeroSecond/>
      <HeroList/>
    </>
  );
};

export default Home;
