import configs from '~/configs';
import Home from '~/pages/Home';
import { Routes } from '~/types/global';

const publicRouter: Routes[] = [
  {
    path: configs.routes.home,
    component: Home,
  },
];

const privateRouter: Routes[] = [
  {
    path: configs.routes.home,
    component: Home,
  },
];

export { publicRouter, privateRouter };
