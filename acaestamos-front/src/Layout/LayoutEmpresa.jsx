import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import NavbarEmpresa from "../componentes/NavbarAdmin/NavbarEmpresa";

const LayoutEmpresa = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <NavbarEmpresa />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutEmpresa;
