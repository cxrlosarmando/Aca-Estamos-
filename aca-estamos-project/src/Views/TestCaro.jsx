import Footer from "../componentes/Footer/Footer";
import Header from "../componentes/Header/Header";
import Navbar from "../componentes/Navbar/Navbar";
import InfoEmpresa from "../componentes/PagesEmpresas/InfoEmpresa/InfoEmpresa";
import EditInfoEmpresa from "../componentes/PagesEmpresas/EditInfoEmpresa/EditInfoEmpresa";
import EditarCv from "../componentes/PagesUsuario/EditarCv/EditarCv"

const TestCaro = () => {
    return (
      <>
      <Header />
      <Navbar />
      {/* <EditarCv /> */}
      {/* <InfoEmpresa /> */}
      <EditInfoEmpresa />
      <Footer />
      </>
    )
  }
  
  export default TestCaro;