import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ children }) => {
  return <button className={styles.accent}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,

  /*После добавления propTypes для children, 
  мы говорим React ожидать children как обязательный параметр
  при использовании компонента Button, что поможет избежать ошибки 
  отсутсвия дочерненго компонента (текста) */
};

export default Button;
