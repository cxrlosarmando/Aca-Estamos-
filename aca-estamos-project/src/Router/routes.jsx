import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from '../Views/Cursos';
import Home from "../Views/Home";
import Login from "../Views/Login";
/* import LoginFormulario from '../Views/LoginFormulario'; */
import PerfilUsers from '../Views/PerfilUsers';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Cursos', element: <ErrorComponent statusCode={404} /> },
  { path: '/Nosotros', element: <ErrorComponent statusCode={404} /> },
  { path: '/Contacto', element: <ErrorComponent statusCode={404} /> },
  { path: '/Login', element: <Login /> },
  /* { path: '/Login-form', element: <LoginFormulario /> }, */
  { path: '/Perfil-Usuario', element: <PerfilUsers /> },
]);

export default router;
