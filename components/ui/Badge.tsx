import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "destructive";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-ds-primary text-white",
      secondary: "bg-input text-text",
      outline: "border border-border bg-transparent text-text",
      success: "bg-success text-white",
      warning: "bg-warning text-white",
      destructive: "bg-destructive text-white",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-medium transition-colors",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };