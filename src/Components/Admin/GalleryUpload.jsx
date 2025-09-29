import { useState } from "react";
import { FaUpload, FaTimes, FaHeart } from "react-icons/fa";

export default function GalleryUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || []);
    setImages((prev) => [...prev, ...files]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);

    // Fake upload simulation
    setTimeout(() => {
      alert("Gallery Post Uploaded! Your happy moment has been shared.");
      setTitle("");
      setDescription("");
      setImages([]);
      setIsUploading(false);
    }, 1500);
  };

  const recentPosts = [
    { id: 1, title: "New Family in Their Dream Home", date: "2 days ago", imageCount: 5 },
    { id: 2, title: "Successful Property Handover", date: "5 days ago", imageCount: 3 },
    { id: 3, title: "Happy Homeowners Celebration", date: "1 week ago", imageCount: 7 },
  ];

  return (
    <div className="space-y-6 mt-15">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Gallery Upload</h1>
        <p className="text-gray-500">
          Share happy moments and success stories from your real estate business.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upload Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <FaHeart className="text-red-500" /> Upload Happy Moment
              </h2>
              <p className="text-sm text-gray-500">
                Share photos and stories of satisfied customers and successful deals
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-medium">
                  Post Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="e.g., New Family Moves Into Dream Home"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Share the story behind this happy moment..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border rounded-md min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Upload Images */}
              <div className="space-y-4">
                <label className="block text-sm font-medium">Upload Images</label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="gallery-upload"
                  />
                  <label htmlFor="gallery-upload" className="cursor-pointer">
                    <FaUpload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-500">Click to upload images or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 10MB each</p>
                  </label>
                </div>

                {images.length > 0 && (
                  <div className="grid gap-2 md:grid-cols-3">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-24 object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <FaTimes className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isUploading || !title || images.length === 0}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50"
              >
                {isUploading ? "Uploading..." : "Share Happy Moment"}
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar - Recent Posts + Tips */}
        <div className="space-y-4">
          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold">Recent Posts</h3>
            <p className="text-sm text-gray-500 mb-3">Your latest gallery uploads</p>
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-medium text-sm">{post.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  <p className="text-xs text-blue-600 mt-1">{post.imageCount} images</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-semibold mb-3">Tips</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                <p>Use high-quality images to showcase property features</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                <p>Include before/after shots when possible</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                <p>Add captions that tell the story behind each moment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
