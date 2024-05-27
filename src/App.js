import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./website/error/Error";
import ScrollToTop from "./website/scrolltotop/ScrollToTop";
import Navbar from "./website/navbar/Navbar";
import Footer from "./website/footer/Footer";
import Home from "./website/pages/home/Home";
import About from "./website/pages/about/About";
import Service from "./website/pages/service/Service";
import Gallery from "./website/pages/gallery/Gallery";
import Blog from "./website/pages/blog/Blog";
import Connect from "./website/pages/connect/Connect";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/connect" element={<Connect />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
