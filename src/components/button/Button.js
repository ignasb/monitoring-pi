import styles from "./Button.module.css";

const Button = ({ title, onClickHandler }) => {
  return (
    <button className={styles.primary} type="button" onClick={(e) => onClickHandler(e)}>{title}</button>
  );
};

export default Button;
