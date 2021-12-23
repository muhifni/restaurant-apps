import HomePage from '../view/homePage';
import Detail from '../view/detail';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/detail/:id': Detail,
};

export default routes;
