import { createBrowserRouter } from 'react-router-dom'
import Index from '../src/componentes/Index/Index';


const routes = createBrowserRouter([
    { path: '/', element: <Index /> }
  //  { path: '/inicio', element: < /> },
  //  { path: '/cursos', element: </> },
  //  { path: '/nosotros', element: < /> },
  //  { path: '/contacto', element: < /> },
  ]);;
  
  export default routes;