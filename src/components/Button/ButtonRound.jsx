import PropTypes from "prop-types";
import styles from "./button.module.css";

const ButtonRound = ({ children }) => {
  return <button className={styles.round}>{children}</button>;
};

ButtonRound.propTypes = {
  children: PropTypes.node.isRequired,

  /*После добавления propTypes для children, 
  мы говорим React ожидать children как обязательный параметр
  при использовании компонента Button, что поможет избежать ошибки 
  отсутсвия дочерненго компонента (текста) */
};

export default ButtonRound;
