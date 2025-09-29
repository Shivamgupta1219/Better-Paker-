import { useState } from "react";
import { FaUpload, FaTimes } from "react-icons/fa";

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
  });
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setMessage("✅ Property Added Successfully!");
      // Reset form
      setFormData({
        title: "",
        location: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        description: "",
      });
      setImages([]);
      setIsSubmitting(false);
      setTimeout(() => setMessage(""), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-6 p-6 mt-10">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Add New Property</h1>
        <p className="text-gray-500">
          Fill out the form below to list a new property on your platform.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-1">Property Details</h2>
        <p className="text-gray-500 mb-6">
          Enter the property information and upload images
        </p>

        {message && (
          <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title + Location */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium">
                Property Title
              </label>
              <input
                id="title"
                name="title"
                placeholder="e.g., Luxury 3BR Apartment"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                id="location"
                name="location"
                placeholder="e.g., Downtown Manhattan"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Price, Bedrooms, Bathrooms, Area */}
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { id: "price", label: "Price ($)", type: "number", placeholder: "500000" },
              { id: "bedrooms", label: "Bedrooms", type: "number", placeholder: "3" },
              { id: "bathrooms", label: "Bathrooms", type: "number", placeholder: "2" },
              { id: "area", label: "Area (sq ft)", type: "number", placeholder: "1200" },
            ].map((field) => (
              <div key={field.id} className="space-y-2">
                <label htmlFor={field.id} className="block text-sm font-medium">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe the property features, amenities, and highlights..."
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border rounded-lg p-2 min-h-[120px] focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-4">
            <label className="block text-sm font-medium">Property Images</label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <FaUpload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-500">
                  Click to upload property images or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG, WEBP up to 10MB each
                </p>
              </label>
            </div>

            {images.length > 0 && (
              <div className="grid gap-2 md:grid-cols-3 lg:grid-cols-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Property ${index + 1}`}
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                    >
                      <FaTimes className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting ? "Adding Property..." : "Add Property"}
          </button>
        </form>
      </div>
    </div>
  );
}