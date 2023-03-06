// React imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
// Component imports
import HomePage from './pages/HomePage/HomePage';
import MainPage from './pages/MainPage/MainPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createHashRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <HomePage /> }]
  }
]);

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </StrictMode>
);
