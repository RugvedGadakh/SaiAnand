import React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 bg-transparent hover:bg-gray-100 hover:text-gray-900",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  ghost: "hover:bg-gray-100 hover:text-gray-900",
  link: "text-blue-600 underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-9 px-3 text-xs",
  lg: "h-11 px-8 text-base",
  icon: "h-10 w-10 flex items-center justify-center",
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"; // Default to <span> if asChild is used

    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
