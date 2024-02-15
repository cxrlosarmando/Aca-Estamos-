import { createBrowserRouter } from 'react-router-dom';

import Home from "../Views/Home"


const router = createBrowserRouter([
    { path: '/', element: <Home /> }
  //  { path: '/inicio', element: < /> },
  //  { path: '/cursos', element: </> },
  //  { path: '/nosotros', element: < /> },
  //  { path: '/contacto', element: < /> },
  ]);;
  
  export default router;