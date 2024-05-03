import CardButtonArticle1 from "../components/Cards/CardButtonArticle1";
import CardButtonArticle2 from "../components/Cards/CardButtonArticle2";

const Blog = () => {
  return (
    <div className="dualContainer">
      <div className="dualContainerTop">
        <h1>СТАТЬИ</h1>
        <p>
          Доверьтесь моему опыту и&nbsp;знаниям и&nbsp;обеспечьте своему ребенку
          качественное медицинское обслуживание и&nbsp;заботу.
        </p>
      </div>
      <div className="dualContainerBottom">
        <CardButtonArticle1 /> <CardButtonArticle2 />
      </div>
    </div>
  );
};

export default Blog;
