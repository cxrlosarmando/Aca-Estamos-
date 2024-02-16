import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from '../Views/Cursos';
import Home from "../Views/Home";
import Login from "../Views/Login";
import LoginFormulario from '../Views/LoginFormulario';
import PerfilUsers from '../Views/PerfilUsers';
import OlvidoContra from '../Views/OlvidoContra';
import Register from '../Views/Register';
import RegisterForm from '../Views/RegisterForm';
import ActualizarDatosPerfil from '../Views/ActualizarDatosPerfil';
import CrearCV from '../Views/CrearCV';
import App from '../App';
import EditEducacion from '../Views/EditEducacion';
import EditExperiencia from '../Views/EditExperiencia';
import EditPerfil from '../Views/EditPerfil';


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/Cursos', element: <ErrorComponent statusCode={404} /> },
  { path: '/Nosotros', element: <ErrorComponent statusCode={404} /> },
  { path: '/Contacto', element: <ErrorComponent statusCode={404} /> },
  { path: '/Login', element: <Login /> },
  { path: '/Pruebas', element: <App /> },
  { path: '/Login-form', element: <LoginFormulario /> },
  { path: '/Perfil-Usuario', element: <PerfilUsers /> },
  { path: '/OlvidoContra', element: <OlvidoContra/>},
  { path: '/Registro', element: <Register /> },
  { path: '/Registro-form', element: <RegisterForm /> },
  { path: '/Actualizar-Datos-Perfil', element: <ActualizarDatosPerfil /> },
  { path: '/Actualizar-Cv', element: <CrearCV /> },
  { path: '/Actualizar-Educacion', element: <EditEducacion /> },
  { path: '/Actualizar-Experiencia', element: <EditExperiencia /> },
  { path: '/Actualizar-Perfil', element: <EditPerfil /> },
]);

export default router;
