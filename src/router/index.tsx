import Home from '../pages/Home';
import Erorr from '../pages/Error';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Erorr />,
      },
    ],
  },
];
