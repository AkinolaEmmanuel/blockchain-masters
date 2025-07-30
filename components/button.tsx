import Link from "next/link";

export const Button = ({ children, variant = "primary", size = "md", className = "", type,  link, target, ...props }: { children: React.ReactNode, variant?: "primary" | "secondary" | "outline", size?: "sm" | "md" | "lg", className?: string, type?: "submit" | "reset" | "button", [key: string]: any, link?: string, target?: string}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
   <a href={link} target={target} rel="noopener noreferrer"> 
    <button 
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
    </a>
  );
};