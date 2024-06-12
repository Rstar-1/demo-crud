import { Route, Routes } from "react-router-dom";
import Error from "./website/error/Error";
import ScrollToTop from "./website/scrolltotop/ScrollToTop";
import Navbar from "./website/navbar/Navbar";
// import Footer from "./website/footer/Footer";
import Home from "./website/pages/home/Home";
import About from "./website/pages/about/About";
import Projects from "./website/pages/about/components/Projects";
import Blog from "./website/pages/blog/Blog";
import EditCard from "./website/pages/about/components/EditCard";
import HeroSection from "./website/pages/home/components/HeroSection2";
import EditProject2 from "./website/pages/about/components/EditProject2";

const App = () => {
  return (
    <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<HeroSection />} />
          <Route path="/abut22" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<EditCard />} />
          <Route path="/editproject/:id" element={<EditProject2 />} />
          <Route path="/blogs" element={<Blog />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
        {/* <Footer /> */}
    </div>
  );
};

export default App;
