import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from '../Views/Cursos';
import Home from "../Views/Home";
import Login from "../Views/Login";
import LoginFormulario from '../Views/LoginFormulario';
import PerfilUsers from '../Views/PerfilUsers';
import OlvidoContra from '../Views/OlvidoContra';
import OlvidoContraseña from '../Views/OlvidoContraseña';
import Register from '../Views/Register';
import RegisterForm from '../Views/RegisterForm';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Cursos', element: <ErrorComponent statusCode={404} /> },
  { path: '/Nosotros', element: <ErrorComponent statusCode={404} /> },
  { path: '/Contacto', element: <ErrorComponent statusCode={404} /> },
  { path: '/Login', element: <Login /> },
  { path: '/Login-form', element: <LoginFormulario /> },
  { path: '/Perfil-Usuario', element: <PerfilUsers /> },
  { path : '/OlvidoContra', element: <OlvidoContra/>},
  { path: '/Registro', element: <Register /> },
  { path: '/Rgistro-form', element: <RegisterForm /> },
]);

export default router;
