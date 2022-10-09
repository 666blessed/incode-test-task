import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const NavLink = ({ label, to }) => {
  return (
    <Link to={to} className={styles.navLink}>
      {label}
    </Link>
  );
};

export { NavLink };
