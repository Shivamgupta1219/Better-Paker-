import { FaBuilding, FaBullseye, FaUsers, FaAward } from "react-icons/fa";
import Card from "../../Components/Card"; // import reusable card

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-100 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Better Parker
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted partner in Dubai's premium real estate market,
              committed to excellence and delivering exceptional property
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Meet Our Founder
              </h2>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Mohit Goel
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam mollitia in necessitatibus perferendis nulla
                  cupiditate, rerum officiis atque magnam laudantium et? Cum,
                  voluptatibus numquam quam minus iusto quae, aliquid saepe
                  magnam error obcaecati tempore? Quaerat at in enim dolorem
                  porro animi distinctio provident voluptates et odio obcaecati
                  consectetur excepturi sed doloremque nostrum tempora, magnam
                  illo beatae possimus quasi, nihil quisquam? Veritatis
                  reprehenderit itaque cum eveniet eius, minus deserunt
                  obcaecati, architecto sequi mollitia magni laudantium minima
                  sunt assumenda ipsam quia quas enim quaerat nobis? Harum saepe
                  id delectus neque consequuntur qui ab sapiente placeat
                  suscipit aliquid asperiores earum repellat nihil consequatur
                  odio iste nisi reiciendis, doloremque pariatur accusantium?
                  Velit eaque quibusdam molestias ab esse. Earum commodi id ipsa
                  nostrum repellat sint enim vitae nisi dolorum aliquam sapiente
                  totam sed quibusdam, vel ea quis ratione libero cum explicabo
                  velit delectus voluptas in eaque. Iste dolorem laborum fugit
                  asperiores aliquam nesciunt voluptate repellendus doloremque
                  deleniti maxime, iusto voluptatum qui nisi perferendis at
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-6xl text-gray-500">👨‍💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Goals & Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision & Mission
              </h2>
              <p className="text-xl text-gray-600">
                Shaping Dubai's real estate landscape with innovation and
                excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card
                icon={FaBullseye}
                title="Our Vision"
                description="To be the leading real estate company in Dubai, recognized for our integrity, 
                innovation, and exceptional service. We envision a future where every client 
                finds their perfect property match through our expertise and dedication."
              />
              <Card
                icon={FaBuilding}
                title="Our Mission"
                description="To provide unparalleled real estate services that exceed expectations, 
                helping our clients make informed decisions in Dubai's dynamic property market. 
                We are committed to building lasting relationships based on trust and results."
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Give You */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Give You
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive real estate solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card
                icon={FaAward}
                title="Expert Guidance"
                description="Professional advice from certified real estate experts with deep market knowledge."
                center
              />
              <Card
                icon={FaUsers}
                title="Personalized Service"
                description="Tailored solutions that match your specific requirements and investment goals."
                center
              />
              <Card
                icon={FaBuilding}
                title="Premium Properties"
                description="Access to Dubai's finest residential and commercial properties in prime locations."
                center
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive real estate services across Dubai
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Property Sales",
                "Property Rentals",
                "Investment Consulting",
                "Market Analysis",
                "Property Management",
                "Mortgage Assistance",
                "Legal Support",
                "After-Sales Service",
              ].map((service, index) => (
                <Card key={index} title={service} center />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
