import { useState } from "react";
import { FaTachometerAlt, FaBuilding, FaImages, FaUsers } from "react-icons/fa";
import DashboardOverview from "../../Components/Admin/DashboardOverview";
import AddProperty from "../../Components/Admin/AddProperty";
import GalleryUpload from "../../Components/Admin/GalleryUpload";
import LeadsTable from "../../Components/Admin/LeadsTable";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const menuItems = [
    { id: "overview", label: "Overview", icon: FaTachometerAlt },
    { id: "properties", label: "Properties", icon: FaBuilding },
    { id: "gallery", label: "Gallery", icon: FaImages },
    { id: "leads", label: "Leads", icon: FaUsers },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "properties":
        return <AddProperty />;
      case "gallery":
        return <GalleryUpload />;
      case "leads":
        return <LeadsTable />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
        <nav className="space-y-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left transition ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" /> {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
};

export default AdminDashboard;
