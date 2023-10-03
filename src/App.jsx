import {Route,Routes,Outlet,} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import './app.scss';
import About from "./Pages/About/About";
import ServiceGuide from "./Pages/ServiceGuide/ServiceGuide";
import CallUs from "./Pages/CallUs/CallUs";
import Questions from "./Pages/Questions/Questions";
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
        <Route path="/service-guide" element={<ServiceGuide />}/>
        <Route path="/callus" element={<CallUs />}/>
        <Route path="/questions" element={<Questions />}/>
      </Route>
    </Routes>
  )
}

export default App
