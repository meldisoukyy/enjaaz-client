import {Route,Routes,Outlet,} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import './app.scss';
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
function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/packages" element={<Packages />}/>
        <Route path="/servicespackage" element={<ServicesPackage />}/>
        <Route path="/callus" element={<CallUs />}/>
        <Route path="/service-guide" element={<ServiceGuide />}/>
        <Route path="/questions" element={<Questions />}/>
        <Route path="/joinus" element={<JoinUs />}/>
        <Route path="/askforaservice" element={<AskForAService />}/>
        <Route path="/freeconsulting" element={<FreeConsulting />}/>
        <Route path="/trymeservice" element={<TryMeService />}/>
      </Route>
    </Routes>
  )
}

export default App
