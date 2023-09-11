import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
  return (
    <>
      <div className="home-page">
        <Header />
        <Section />
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default HomePage;
