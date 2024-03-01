import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import NavbarEmpresa from "../componentes/NavbarEmpresa/NavbarEmpresa";
import Navbar from "../componentes/Navbar/Navbar";
const LayoutEmpresa = ({ children }) => {
  return (
    
     <>
      <NavbarEmpresa />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </>
  );
};

export default LayoutEmpresa;
