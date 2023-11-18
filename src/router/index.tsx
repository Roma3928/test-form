import Home from '../pages/Home';
import Erorr from '../pages/Error';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';
import RequireAuth from './RequireAuth';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
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
