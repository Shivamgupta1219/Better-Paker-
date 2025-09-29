import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import About from "./Pages/About_setion/About";
import Contact from "./Pages/Contact_section/Contact";
import Gallery from "./Pages/Gallery_section/Gallery";
import Hero from "./Pages/hero_section/Hero";
import Partners from "./Pages/Partner_section/Partner";
import Properties from "./Pages/Property_section/Property";

// Admin
import AdminDashboard from "./Pages/Admin_Section/AdminDashbord"; // <-- Make sure path is correct
import AdminLogin from "./Pages/Admin_Section/AdminLogin"; // <-- Make sure path is correct
function App() {
  // Replace this with your actual authentication logic
  const isAuthenticated = true;

  return (
    <>
      <Navbar />
      <Navbar />

      <Routes>
        {/* Home Page */}
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

        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin/login" />
            )
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
