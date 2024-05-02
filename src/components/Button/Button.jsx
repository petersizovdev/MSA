import PropTypes from 'prop-types';
import styles from "./button.module.css";

const Button = ({children}) => {
  return <button className={styles.accent}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
