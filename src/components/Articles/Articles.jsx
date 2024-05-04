import { useState } from 'react';
import Button from "../Button/Button";
import ButtonRound from "../Button/ButtonRound";
import styles from "./articles.module.css";
import { articleArr } from "../../data/data.js";

const Articles = () => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  const handlePrevArticle = () => {
    setCurrentArticleIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleNextArticle = () => {
    setCurrentArticleIndex(prevIndex => (prevIndex < articleArr.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const article = (
    <div className={styles.blogText}>
      <h1>{articleArr[currentArticleIndex].title}</h1>
      <h3>{articleArr[currentArticleIndex].desc}</h3>
      {articleArr[currentArticleIndex].content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <p>{articleArr[currentArticleIndex].author}</p>
    </div>
  );

  const articleBtns = articleArr.map((artBtn, index) => (
    <Button key={artBtn.id} onClick={() => setCurrentArticleIndex(index)}>
      {artBtn.title}
    </Button>
  ));

  return (
    <div className={styles.blog}>
      <div className={styles.blogFilter}>{articleBtns}</div>
      {article}
      <div className={styles.blogNav}>
        <ButtonRound onClick={handlePrevArticle}>
          <b>ᐸ</b>
        </ButtonRound>
        <ButtonRound onClick={handleNextArticle}>
          <b>ᐳ</b>
        </ButtonRound>
      </div>
    </div>
  );
};

export default Articles;