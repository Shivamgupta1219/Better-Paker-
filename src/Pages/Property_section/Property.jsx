import React, { useState } from "react";
import { Button } from "../Ui_ResuseCompo/Button";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRegHeart,
  FaRulerCombined,
} from "react-icons/fa";

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

const CardFooter = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = "primary" }) => {
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
  };
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

// ✅ Tabs
const Tabs = ({ value, onChange, children }) => (
  <div>
    {children.map((child) =>
      child.type === TabsList
        ? React.cloneElement(child, {
            activeTab: value,
            setActiveTab: onChange,
          })
        : child.type === TabsContent
        ? React.cloneElement(child, { activeTab: value })
        : child
    )}
  </div>
);

const TabsList = ({ children }) => (
  <div className="grid grid-cols-2 w-full mb-8">{children}</div>
);

const TabsTrigger = ({ children, value, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-4 py-2 text-center border-b-2 ${
      activeTab === value
        ? "border-blue-600 text-blue-600 font-semibold"
        : "border-gray-300 text-gray-600"
    }`}
  >
    {children}
  </button>
);

const TabsContent = ({ children, value, activeTab }) =>
  activeTab === value ? children : null;


// ✅ Data

const properties = {
  apartments: [
    {
      id: 1,
      title: "Luxury 1BHK in Downtown Dubai",
      location: "Downtown Dubai",
      price: "AED 1,200,000",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sq ft",
      image: "/placeholder.svg",
      featured: true,
      demand: "high",
    },
    {
      id: 2,
      title: "Modern 2BHK in Business Bay",
      location: "Business Bay",
      price: "AED 1,800,000",
      bedrooms: 2,
      bathrooms: 2,
      area: "950 sq ft",
      image: "/placeholder.svg",
      featured: false,
      demand: "high",
    },
    {
      id: 3,
      title: "Premium 3BHK in Marina",
      location: "Dubai Marina",
      price: "AED 2,500,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "1,250 sq ft",
      image: "/placeholder.svg",
      featured: true,
      demand: "medium",
    },
  ],
  villas: [
    {
      id: 4,
      title: "Luxury Villa in Palm Jumeirah",
      location: "Palm Jumeirah",
      price: "AED 8,500,000",
      bedrooms: 4,
      bathrooms: 5,
      area: "3,500 sq ft",
      image: "/placeholder.svg",
      featured: true,
      demand: "high",
    },
    {
      id: 5,
      title: "Modern Villa in Emirates Hills",
      location: "Emirates Hills",
      price: "AED 12,000,000",
      bedrooms: 5,
      bathrooms: 6,
      area: "4,200 sq ft",
      image: "/placeholder.svg",
      featured: true,
      demand: "high",
    },
  ],
};

const attractivePlaces = [
  "Downtown Dubai",
  "Dubai Marina",
  "Palm Jumeirah",
  "Business Bay",
  "Emirates Hills",
  "Jumeirah Beach Residence",
];


// ✅ Reusable PropertyCard
const PropertyCard = ({ property }) => (
  <Card className="group">
    <div className="relative overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute top-4 left-4 flex gap-2">
        {property.featured && <Badge>Featured</Badge>}
        {property.demand === "high" && (
          <Badge variant="secondary">High Demand</Badge>
        )}
      </div>
      <button className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white">
        <FaRegHeart className="w-4 h-4" />
      </button>
    </div>

    <CardContent>
      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
      <div className="flex items-center text-gray-500 mb-4">
        <FaMapMarkerAlt className="w-4 h-4 mr-1" />
        <span className="text-sm">{property.location}</span>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center">
          <FaBed className="w-4 h-4 mr-1" /> {property.bedrooms} Bed
        </div>
        <div className="flex items-center">
          <FaBath className="w-4 h-4 mr-1" /> {property.bathrooms} Bath
        </div>
        <div className="flex items-center">
          <FaRulerCombined className="w-4 h-4 mr-1" /> {property.area}
        </div>
      </div>

      <div className="text-2xl font-bold text-blue-600">{property.price}</div>
    </CardContent>

    <CardFooter>
      <Button className="w-full">View Details</Button>
    </CardFooter>
  </Card>
);
// ✅ Main Component
export default function Properties() {
  const [activeTab, setActiveTab] = useState("apartments");
  const [bedroomFilter, setBedroomFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filterProperties = (props) =>
    props.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBedroom =
        bedroomFilter === "all" ||
        property.bedrooms.toString() === bedroomFilter;
      return matchesSearch && matchesBedroom;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Properties in Dubai
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover your dream home among Dubai's finest apartments and villas
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                placeholder="Search by location or property name..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <FaFilter className="w-4 h-4" /> Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs value={activeTab} onChange={setActiveTab}>
            <TabsList>
              <TabsTrigger
                value="apartments"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                Apartments
              </TabsTrigger>
              <TabsTrigger
                value="villas"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                Villas
              </TabsTrigger>
            </TabsList>

            {/* Bedroom Filters */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              <Button
                variant={bedroomFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setBedroomFilter("all")}
              >
                All
              </Button>
              {["1", "2", "3", "4", "5"].map((bedroom) => (
                <Button
                  key={bedroom}
                  variant={bedroomFilter === bedroom ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBedroomFilter(bedroom)}
                >
                  {bedroom}BHK
                </Button>
              ))}
            </div>

            <TabsContent value="apartments" activeTab={activeTab}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterProperties(properties.apartments).map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="villas" activeTab={activeTab}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterProperties(properties.villas).map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Attractive Places */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Most Attractive Places</h2>
            <p className="text-xl text-gray-600">
              Dubai's most sought-after neighborhoods for property investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractivePlaces.map((place, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg">
                <CardContent className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaMapMarkerAlt className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">{place}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* High Demand Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              All-Time Demand Properties
            </h2>
            <p className="text-xl text-gray-600">
              Properties that consistently attract investors and residents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...properties.apartments, ...properties.villas]
              .filter((property) => property.demand === "high")
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
