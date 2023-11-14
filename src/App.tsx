import React from 'react';
import Header from './components/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './router';

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
