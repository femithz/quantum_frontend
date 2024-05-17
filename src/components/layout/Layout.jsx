import RouterConfig from '../../routes/RouterConfig';
import Footer from "../footer/Footer"
import { Header } from "../header/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <>
        <div>
          <Header />
          <RouterConfig />
          <Footer />
          <ToastContainer />
        </div>
    </>
  );
};

export default Layout;