import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import "./app.scss";
import About from "./Pages/About/About";
import ServiceGuide from "./Pages/ServiceGuide/ServiceGuide";
import CallUs from "./Pages/CallUs/CallUs";
import Questions from "./Pages/Questions/Questions";
import JoinUs from "./Pages/JoinUs/JoinUs";
import AskForAService from "./Pages/AskForAService/AskForAService";
import FreeConsulting from "./Pages/FreeConsulting/FreeConsulting";
import TryMeService from "./Pages/TryMeService/TryMeService";
import Packages from "./Pages/Packages/Packages";
import ServicesPackage from "./Pages/ServicesPackage/ServicesPackage";
import WageManagment from "./Pages/WageManagment/WageManagment";
import LegalServices from "./Pages/LegalServices/LegalServices";
import DesignServices from "./Pages/DesignServices/DesignServices";
import MarketingServices from "./Pages/MarketingServices/MarketingServices";
import Offers from "./Pages/Offers/Offers";
import Loader from "./Components/Loader/Loader";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import DedicatedAsk from "./Pages/DedicatedAsk/DedicatedAsk";
function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
const location=useLocation().pathname
useEffect(() => {
  window.scrollTo(0,0)
}, [location])
useEffect(() => {
  AOS.init();
}, []);

  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //     setIsPageLoaded(true);
  //   });

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('load', () => {
  //       setIsPageLoaded(true);
  //     });
  //   };
  // }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsPageLoaded(true);
  //   }, 3000);
  // }, []);
  useEffect(() => {
    window.onload = () => {
      setIsPageLoaded(true);
    };
  }, []);

  const Layout = () => {
    return (
      <div className="app">
        {!isPageLoaded ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Outlet />
            <Footer />
            <a className="whatsapp" href="https://wa.me/+966502144449" data-aos="fade-in" data-aos-duration="2000" data-aos-delay='500'>
              <div className="image">
                <img src="/images/whatsappi.png" alt="" />
              </div>
            </a>
          </>
        )}
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/servicespackage" element={<ServicesPackage />} />
        <Route path="/wagemanagment" element={<WageManagment />} />
        <Route path="/legalservices" element={<LegalServices />} />
        <Route path="/designservices" element={<DesignServices />} />
        <Route path="/marketingservices" element={<MarketingServices />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/callus" element={<CallUs />} />
        <Route path="/service-guide" element={<ServiceGuide />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/askforaservice" element={<AskForAService />} />
        <Route path="/askforaservice/:id" element={<DedicatedAsk />} />
        <Route path="/freeconsulting" element={<FreeConsulting />} />
        <Route path="/trymeservice" element={<TryMeService />} />
      </Route>
    </Routes>
  );
}

export default App;
