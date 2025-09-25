import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About_setion/About";
import Contact from "./Pages/Contact_section/Contact";
import Gallery from "./Pages/Gallery_section/Gallery";
import Hero from "./Pages/hero_section/Hero";
import Partners from "./Pages/Partner_section/Partner";
import Properties from "./Pages/Property_section/Property";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Properties />
              <Partners />
              <Gallery />
              <Contact />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
