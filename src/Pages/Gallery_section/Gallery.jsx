import { useState } from "react";
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaTimes } from "react-icons/fa";
import { Button } from "../Ui_ResuseCompo/button.jsx";

// ✅ Reusable Components
// const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
//   const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors";
//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
//     icon: "p-2 rounded-full border bg-white hover:bg-gray-100",
//   };
//   const sizes = { sm: "px-3 py-1 text-sm", md: "px-4 py-2" };
//   return (
//     <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// };

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Badge = ({ children, color = "blue", className = "" }) => {
  const colors = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${colors[color]} ${className}`}
    >
      {children}
    </span>
  );
};

// ✅ Gallery Data
const galleryItems = [
  {
    id: 1,
    type: "Deal Completion",
    title: "Luxury Villa Handover - Palm Jumeirah",
    location: "Palm Jumeirah",
    date: "March 2024",
    client: "Mr. & Mrs. Al-Rashid",
    image: "/placeholder.svg",
    description:
      "Successful completion of AED 8.5M villa purchase with our satisfied clients.",
  },
  {
    id: 2,
    type: "Happy Moment",
    title: "First-Time Buyers Celebration",
    location: "Dubai Marina",
    date: "February 2024",
    client: "Ahmed Family",
    image: "/placeholder.svg",
    description:
      "Celebrating the Ahmed family's first property purchase in Dubai Marina.",
  },
  {
    id: 3,
    type: "Deal Completion",
    title: "Investment Property Portfolio",
    location: "Downtown Dubai",
    date: "January 2024",
    client: "International Investor",
    image: "/placeholder.svg",
    description:
      "Portfolio expansion with 3 premium apartments in Downtown Dubai.",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Deal Completion", "Happy Moment"];
  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.type === filter);

  const GalleryCard = ({ item }) => (
    <Card
      className="group cursor-pointer"
      onClick={() => setSelectedImage(item)}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm opacity-90">{item.description}</p>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <Badge color={item.type === "Deal Completion" ? "blue" : "green"}>
            {item.type}
          </Badge>
        </div>
      </div>

      <CardContent>
        <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <FaMapMarkerAlt className="w-4 h-4 mr-2" /> {item.location}
          </div>
          <div className="flex items-center">
            <FaCalendar className="w-4 h-4 mr-2" /> {item.date}
          </div>
          <div className="flex items-center">
            <FaUsers className="w-4 h-4 mr-2" /> {item.client}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Celebrating successful deals and happy moments with our valued
            clients. Each image tells a story of dreams fulfilled and
            investments secured.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="flex justify-center gap-4">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full relative">
            <Button
              variant="icon"
              className="absolute -top-12 right-0"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes className="w-4 h-4 text-white" />
            </Button>
            <Card>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <CardContent>
                <Badge
                  color={
                    selectedImage.type === "Deal Completion" ? "blue" : "green"
                  }
                >
                  {selectedImage.type}
                </Badge>
                <h2 className="text-2xl font-bold mt-4 mb-2">
                  {selectedImage.title}
                </h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2" />{" "}
                    {selectedImage.location}
                  </div>
                  <div className="flex items-center">
                    <FaCalendar className="w-4 h-4 mr-2" /> {selectedImage.date}
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="w-4 h-4 mr-2" /> {selectedImage.client}
                  </div>
                </div>
                <p className="text-gray-600">{selectedImage.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
