import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from '../Views/Cursos';
import Home from "../Views/Home";

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Cursos', element: <ErrorComponent statusCode={404} /> },
  { path: '/Nosotros', element: <ErrorComponent statusCode={404} /> },
  { path: '/Contacto', element: <ErrorComponent statusCode={404} /> },
]);

export default router;
