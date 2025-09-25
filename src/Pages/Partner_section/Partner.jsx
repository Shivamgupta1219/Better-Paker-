import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Reusable Components
const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    icon: "p-2 rounded-full border bg-white hover:bg-gray-100",
  };
  const sizes = { sm: "px-3 py-1 text-sm", md: "px-4 py-2" };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size] || ""} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => <div className={`p-6 ${className}`}>{children}</div>;

// Partner Data
const partners = [
  { name: "Emaar Properties", logo: "/placeholder.svg", category: "Developer" },
  { name: "DAMAC Properties", logo: "/placeholder.svg", category: "Developer" },
  { name: "Sobha Realty", logo: "/placeholder.svg", category: "Developer" },
  { name: "Dubai Properties", logo: "/placeholder.svg", category: "Developer" },
  { name: "Nakheel", logo: "/placeholder.svg", category: "Developer" },
  { name: "Meraas", logo: "/placeholder.svg", category: "Developer" },
  { name: "Dubai Land Department", logo: "/placeholder.svg", category: "Government" },
  { name: "RERA", logo: "/placeholder.svg", category: "Regulatory" },
  { name: "Emirates NBD", logo: "/placeholder.svg", category: "Banking" },
  { name: "ADCB", logo: "/placeholder.svg", category: "Banking" },
  { name: "CBD Real Estate", logo: "/placeholder.svg", category: "Agency" },
  { name: "Allsopp & Allsopp", logo: "/placeholder.svg", category: "Agency" },
];

export default function Partners() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const partnersPerSlide = 6;
  const totalSlides = Math.ceil(partners.length / partnersPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Trusted Partners</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We collaborate with Dubai's leading developers, agencies, and financial institutions to provide you with the best property solutions and investment opportunities.
        </p>
      </section>

      {/* Partner Categories */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { category: "Developers", count: "6+", icon: "🏗️" },
            { category: "Banking Partners", count: "4+", icon: "🏦" },
            { category: "Government Bodies", count: "3+", icon: "🏛️" },
            { category: "Real Estate Agencies", count: "5+", icon: "🏢" },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.count}</div>
                <h3 className="text-lg font-semibold">{item.category}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="py-16 bg-gray-100 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">Trusted relationships that drive success</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slidePartners = partners.slice(
                  slideIndex * partnersPerSlide,
                  (slideIndex + 1) * partnersPerSlide
                );
                return (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8">
                      {slidePartners.map((partner, idx) => (
                        <Card key={idx} className="group text-center">
                          <CardContent className="p-8">
                            <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-12 h-12 object-contain"
                              />
                            </div>
                            <h3 className="font-semibold mb-2">{partner.name}</h3>
                            <p className="text-sm text-gray-500">{partner.category}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </Button>
          <Button
            variant="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
            onClick={nextSlide}
          >
            <FaChevronRight />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentSlide ? "bg-blue-600" : "bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Our Partnerships Matter</h2>
          <p className="text-xl text-gray-600">Strategic alliances that benefit our clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "🤝", title: "Exclusive Access", desc: "First access to premium properties and exclusive deals through our developer partnerships." },
            { icon: "💰", title: "Better Financing", desc: "Competitive mortgage rates and flexible payment plans through our banking partnerships." },
            { icon: "✅", title: "Seamless Process", desc: "Streamlined transactions and legal compliance through regulatory body partnerships." },
          ].map((item, idx) => (
            <Card key={idx} className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
