import { Routes, Route } from "react-router-dom";

import NavbarComponents from "./components/NavbarComponent";
// import FooterComponents from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";

const App = () => {
  return (
    <div>
      <NavbarComponents />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
      </Routes>

      {/* <FooterComponents /> */}
    </div>
  );
};

export default App;
