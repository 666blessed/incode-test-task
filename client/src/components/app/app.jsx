import { Dashboard } from '../dashboard/dashboard';
import { NotFound } from '../not-found/not-found';
import { About } from '../about/about';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../header/header';
import { AppRoute } from '../../common/enums/enums';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={AppRoute.ROOT} element={<Dashboard />} />
        <Route path={AppRoute.ABOUT} element={<About />} />
        <Route path={AppRoute.ANY} element={<NotFound />} />
      </Routes>
    </>
  );
};

export { App };
