import HomePage from '../view/homePage';
import Detail from '../view/detail';
import Favorite from '../view/favorite';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
