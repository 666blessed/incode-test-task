import styles from './styles.module.scss';

const Button = ({ type = 'button', label, onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
