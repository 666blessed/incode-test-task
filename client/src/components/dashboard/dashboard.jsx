import { TickerContainer } from '../ticker-container/ticker-container';
import { tickersActions } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { API } from '../../common/constants/constants';
import { io } from 'socket.io-client';

import styles from './styles.module.scss';

const tickerSocket = io(API);

tickerSocket.on('connect', () => {
  tickerSocket.emit('start');
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tickers } = useSelector((state) => ({
    tickers: state.tickers.tickers,
  }));

  tickerSocket.on('ticker', (tickers) => {
    dispatch(tickersActions.getTickers(tickers));
  });

  return (
    <div className={styles.mainContent}>
      <TickerContainer tickers={tickers} />
    </div>
  );
};

export { Dashboard };
