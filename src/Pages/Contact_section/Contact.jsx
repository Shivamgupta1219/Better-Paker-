import { Button } from "../Ui_ResuseCompo/button.jsx";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 pt-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold ${className}`}>{children}</h3>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! Thank you for contacting us.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Better Parker
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to find your dream property? Get in touch with our expert team
            today and let us help you navigate Dubai's premium real estate
            market.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Visit Our Office</CardTitle>
              <p className="text-gray-600 leading-relaxed mt-2">
                Dubai International Financial Centre
                <br />
                Building 4, Level 12
                <br />
                Dubai, UAE
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Call Us</CardTitle>
              <p className="text-gray-600 leading-relaxed mt-2">
                Primary: +971 54 557 628
                {/* <br />
                Office: +971 4 123 4567
                <br />
                WhatsApp: +971 54 557 628 */}
              </p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Email Us</CardTitle>
              <p className="text-gray-600 leading-relaxed mt-2">
                info@betterparker.com
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <p className="text-gray-600 mt-2">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971  54 557 628"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Office Hours */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-0">
                  <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <FaMapMarkerAlt className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <p className="text-gray-600">Interactive Map</p>
                      <p className="text-sm text-gray-500">DIFC, Dubai, UAE</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FaClock className="w-6 h-6 text-blue-600" /> Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Saturday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <p className="text-sm text-gray-500">
                      Emergency contact available 24/7 for existing clients
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600 text-black">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Call us now for urgent property inquiries or to schedule a
                    same-day viewing.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <FaPhone className="w-4 h-4" />
                    <a href="tel:+9715455768"> Call Now: +971 54 557 628</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
