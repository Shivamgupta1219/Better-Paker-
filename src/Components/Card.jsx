import React from "react";

export default function Card({ icon: Icon, title, description, center }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition text-center">
      {Icon && <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />}
      {title && (
        <h3
          className={`${
            center ? "text-xl" : "text-2xl"
          } font-semibold text-gray-900 mb-3`}
        >
          {title}
        </h3>
      )}
      {description && (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
