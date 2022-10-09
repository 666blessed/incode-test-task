import { NavLink } from '../common/common';
import { AppRoute } from '../../common/enums/enums';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.buttonWrapper}>
        <NavLink label="Home" to={AppRoute.ROOT} />
      </div>
      <div className={styles.buttonWrapper}>
        <NavLink label="About" to={AppRoute.ABOUT} />
      </div>
    </div>
  );
};

export { Header };
