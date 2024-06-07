import { Route, Routes } from "react-router-dom";
import Error from "./website/error/Error";
import ScrollToTop from "./website/scrolltotop/ScrollToTop";
import Navbar from "./website/navbar/Navbar";
// import Footer from "./website/footer/Footer";
import Home from "./website/pages/home/Home";
import About from "./website/pages/about/About";
import Blog from "./website/pages/blog/Blog";
import EditCard from "./website/pages/about/components/EditCard";

const App = () => {
  return (
    <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<EditCard />} />
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
