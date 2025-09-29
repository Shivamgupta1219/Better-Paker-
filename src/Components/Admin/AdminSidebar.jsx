import { useState } from "react";
import {
  FaBuilding,
  FaTachometerAlt,
  FaPlus,
  FaImages,
  FaUsers,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar({ activeTab, setActiveTab }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { id: "overview", title: "Overview", icon: <FaTachometerAlt /> },
    { id: "properties", title: "Add Property", icon: <FaPlus /> },
    { id: "gallery", title: "Gallery Upload", icon: <FaImages /> },
    { id: "leads", title: "View Leads", icon: <FaUsers /> },
  ];

  const handleLogout = () => {
    // TODO: Replace with real auth logout
    navigate("/admin/login");
  };

  return (
    <div className="flex flex-col h-screen bg-white shadow-md">
      {/* Header */}
      <header className="h-14 flex items-center justify-between border-b px-4 bg-gray-50">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded hover:bg-gray-200"
          >
            <FaBars className="w-5 h-5" />
          </button>
          {!isCollapsed && (
            <>
              <FaBuilding className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-lg">RealEstate Admin</span>
            </>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-200 text-sm"
        >
          <FaSignOutAlt className="w-4 h-4" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </header>

      {/* Sidebar Menu */}
      <nav
        className={`flex-1 overflow-y-auto transition-all duration-300 ${
          isCollapsed ? "w-14" : "w-64"
        }`}
      >
        <div className="p-4">
          {!isCollapsed && (
            <h2 className="text-xs font-bold uppercase text-gray-500 mb-2">
              Admin Panel
            </h2>
          )}
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition ${
                    activeTab === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {!isCollapsed && <span>{item.title}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
