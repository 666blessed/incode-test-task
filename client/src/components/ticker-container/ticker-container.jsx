import { Ticker } from '../common/common';
import styles from './styles.module.scss';

const TickerContainer = ({ tickers, placeholder = 'No data.' }) => {
  return (
    <div className={styles.container}>
      {tickers.length
        ? tickers.map((ticker) => (
            <Ticker
              title={ticker.ticker}
              price={ticker.price}
              change={ticker.change}
              percentageChange={ticker.change_percent}
              key={ticker.ticker}
            />
          ))
        : placeholder}
    </div>
  );
};

export { TickerContainer };
