import { Button } from '../common/common';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../common/enums/enums';

const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(AppRoute.ROOT);
  };

  return (
    <div className={styles.mainContent}>
      <h1 className={styles.heading}>Oops.. Page not found.</h1>
      <div className={styles.buttonWrapper}>
        <Button label="Return home" onClick={handleNavigate} />
      </div>
    </div>
  );
};

export { NotFound };
