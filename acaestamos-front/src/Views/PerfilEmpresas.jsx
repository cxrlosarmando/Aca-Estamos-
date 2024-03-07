import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import NavbarLogin from "../componentes/NavbarLogin/NavbarLogin";
import PerfilEmpresa from "../componentes/PagesEmpresas/PerfilEmpresa/PerfilEmpresa";
import FiltroEmpresa from '../componentes/Filtros/FiltroEmpresa/FiltroEmpresa';
import LayoutEmpresa from '../Layout/LayoutEmpresa';
import { useParams } from 'react-router-dom';


const PerfilEmpresas = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 1000);
  }, []);

  return (
      <>
          {loading ? (
              <Loading />
          ) : (
              <>
                <LayoutEmpresa>
                  
                  <FiltroEmpresa />
                  <PerfilEmpresa id={id}/>
                  </LayoutEmpresa>
              </>
          )}
      </>
  );
};

export default PerfilEmpresas;

