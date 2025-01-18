interface CustomButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "outline" | "solid";
    size?: "icon" | "default";
  }
  
  export  const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    onClick,
    className = "",
    variant = "solid",
    size = "default",
  }) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none";
    const variantStyles =
      variant === "outline"
        ? "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100"
        : "bg-blue-600 text-white hover:bg-blue-700";
    const sizeStyles =
      size === "icon" ? "w-8 h-8" : "px-4 py-2 text-sm";
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      >
        {children}
      </button>
    );
  };

  export default CustomButton;