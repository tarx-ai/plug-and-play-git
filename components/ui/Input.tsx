import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, label, helperText, ...props }, ref) => {
    const inputId = React.useId();
    
    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-text"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-lg border bg-input px-3 py-2 text-sm text-text placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-ds-primary focus:ring-offset-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error 
              ? "border-destructive focus:ring-destructive" 
              : "border-border hover:border-border-hover",
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className={cn(
            "text-xs",
            error ? "text-destructive" : "text-text-muted"
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };