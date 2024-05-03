import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.accent}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  /*После добавления propTypes для children, 
  мы говорим React ожидать children как обязательный параметр
  при использовании компонента Button, что поможет избежать ошибки 
  отсутсвия дочерненго компонента (текста) */

  onClick: PropTypes.func.isRequired,
  /*Валидация для обработчика события onClick
  
  
💡 Валидация пропсов с помощью PropTypes в React-компонентах помогает проверить типы передаваемых свойств (props), 
что помогает в разработке более безопасного кода. 
В данном случае, в компоненте Button, определены PropTypes для onClick (функция для обработки события клика)
и children (дочерние элементы), чтобы гарантировать, что компонент будет использоваться правильно.

Если пропсы передаются неправильного типа, например, 
если вместо функции onClick передать что-то другое или не передать необходимые дочерние элементы, 
то React выдаст предупреждение в консоли браузера. 
Это позволяет быстро обнаруживать ошибки связанные с передачей пропсов и облегчает отладку.
Таким образом, валидация PropTypes - это 
хорошая практика для обеспечения правильного использования компонентов
 и предотвращения потенциальных проблем в процессе разработки. 🛡️👍*/
};

export default Button;
