import Header from "../componentes/Header/Header";
import Footer from "../componentes/Footer/Footer";
import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <NavbarAdmin />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
