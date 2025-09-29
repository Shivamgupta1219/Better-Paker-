import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-yellow-500 text-black">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-white ">
                {" "}
                <img
                  src="../src/assets/company_Logo/Better_parker.png"
                  alt="Company Logo"
                />
              </div>
            </div>
            <p className="text-black leading-relaxed">
              Your trusted partner in Dubai's premium real estate market. We
              specialize in luxury properties and exceptional investment
              opportunities.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedin />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 hover:bg-white-100 hover:text-white transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Property Sales",
                "Property Rentals",
                "Investment Consulting",
                "Property Management",
                "Market Analysis",
                "Legal Support",
              ].map((service) => (
                <li key={service} className="text-black">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-black mt-0.5" />
                <p className="text-black text-sm">
                  Dubai International Financial Centre
                  <br />
                  Building 4, Level 12
                  <br />
                  Dubai, UAE
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-black" />
                <span className="text-black text-sm">+971 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-black" />
                <span className="text-black text-sm">
                  info@betterparker.com
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <Link
                    to="/admin/login"
                    className="text-white font-semibold hover:underline"
                    target="_blank"
                  >
                    Go to Admin Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black text-sm">
              © 2024 Better Parker Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="#"
                className="text-black hover:text-yellow-500 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="text-black hover:text-yellow-500 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="#"
                className="text-black hover:text-yellow-500 text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
