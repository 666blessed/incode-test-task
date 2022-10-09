import styles from './styles.module.scss';

const Ticker = ({ title, price, change, percentageChange }) => {
  const zeroValue = 0;
  const isPositiveChange = change > zeroValue;
  const isPositivePercentageChange = percentageChange > zeroValue;
  return (
    <div className={styles.ticker}>
      <span className={styles.title}>{title}</span>
      <span className={styles.price}>{price}$</span>
      <span
        className={
          isPositiveChange ? styles.positiveChange : styles.negativeChange
        }
      >
        {isPositiveChange ? `+${change}` : `-${change}`}
      </span>
      <span
        className={
          isPositivePercentageChange
            ? styles.positivePercentageChange
            : styles.negativePercentageChange
        }
      >
        {isPositivePercentageChange
          ? `+${percentageChange}%`
          : `-${percentageChange}%`}
      </span>
    </div>
  );
};

export { Ticker };
