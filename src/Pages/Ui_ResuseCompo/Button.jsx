export function Button({ children, variant = "default", size = "md", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-green-600 text-white hover:bg-green-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    icon: "p-2 rounded-full border bg-white hover:bg-gray-100",
  };
  const sizes = { sm: "px-3 py-1 text-sm", md: "px-4 py-2", lg: "px-6 py-3 text-lg" };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
