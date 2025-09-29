import { useState } from "react";
import {
  FaSearch,
  FaDownload,
  FaEye,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function LeadsTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const [leads] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      message:
        "Interested in the downtown apartment listing. Would like to schedule a viewing.",
      date: "2024-01-15",
      status: "new",
      property: "Luxury Downtown Apartment",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 987-6543",
      message: "Looking for a 3-bedroom house in the suburbs for my family.",
      date: "2024-01-14",
      status: "contacted",
      property: "Suburban Family Home",
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@email.com",
      phone: "+1 (555) 456-7890",
      message:
        "Interested in investment properties. Please send me available options.",
      date: "2024-01-13",
      status: "qualified",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily.w@email.com",
      phone: "+1 (555) 321-0987",
      message:
        "First-time homebuyer looking for guidance and available properties under $400k.",
      date: "2024-01-12",
      status: "closed",
      property: "Starter Home Package",
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert.brown@email.com",
      phone: "+1 (555) 654-3210",
      message:
        "Selling my current home and looking for an upgrade. Need consultation.",
      date: "2024-01-11",
      status: "new",
    },
  ]);

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    const variants = {
      new: "bg-blue-100 text-blue-800",
      contacted: "bg-yellow-100 text-yellow-800",
      qualified: "bg-green-100 text-green-800",
      closed: "bg-gray-100 text-gray-800",
    };
    return (
      <span
        className={`px-2 py-1 rounded text-xs font-medium ${variants[status]}`}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const exportToCSV = () => {
    const csvData = [
      ["Name", "Email", "Phone", "Message", "Date", "Status", "Property"],
      ...filteredLeads.map((lead) => [
        lead.name,
        lead.email,
        lead.phone,
        lead.message,
        lead.date,
        lead.status,
        lead.property || "",
      ]),
    ];
    const csvContent = csvData
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 mt-15">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customer Leads</h1>
        <p className="text-gray-500">
          View and manage all customer inquiries and contact requests.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">All Leads</h2>
            <p className="text-sm text-gray-500">
              {filteredLeads.length} total leads •{" "}
              {leads.filter((l) => l.status === "new").length} new inquiries
            </p>
          </div>

          <div className="flex gap-2">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center gap-1 px-3 py-2 border rounded-md hover:bg-gray-100"
            >
              <FaDownload /> Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-3 py-2 text-sm font-medium border">Name</th>
                <th className="px-3 py-2 text-sm font-medium border">
                  Contact
                </th>
                <th className="px-3 py-2 text-sm font-medium border">
                  Message
                </th>
                <th className="px-3 py-2 text-sm font-medium border">
                  Property
                </th>
                <th className="px-3 py-2 text-sm font-medium border">Date</th>
                <th className="px-3 py-2 text-sm font-medium border">Status</th>
                <th className="px-3 py-2 text-sm font-medium border">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-3 py-2 border font-medium">{lead.name}</td>
                  <td className="px-3 py-2 border space-y-1">
                    <div className="flex items-center gap-1 text-sm">
                      <FaEnvelope className="w-3 h-3" /> {lead.email}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FaPhone className="w-3 h-3" /> {lead.phone}
                    </div>
                  </td>
                  <td className="px-3 py-2 border max-w-xs text-sm line-clamp-2">
                    {lead.message}
                  </td>
                  <td className="px-3 py-2 border">
                    {lead.property && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                        {lead.property}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 border text-sm text-gray-500">
                    {new Date(lead.date).toLocaleDateString()}
                  </td>
                  <td className="px-3 py-2 border">
                    {getStatusBadge(lead.status)}
                  </td>
                  <td className="px-3 py-2 border">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <FaEye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
