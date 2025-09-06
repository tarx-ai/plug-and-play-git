import React from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || React.useId();
    
    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            id={checkboxId}
            type="checkbox"
            className={cn(
              "peer h-4 w-4 shrink-0 rounded-sm border border-border bg-input",
              "focus:outline-none focus:ring-2 focus:ring-ds-primary focus:ring-offset-2 focus:ring-offset-bg",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "checked:bg-ds-primary checked:border-ds-primary checked:text-white",
              className
            )}
            ref={ref}
            {...props}
          />
          {/* Checkmark */}
          <svg
            className="absolute inset-0 h-4 w-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {label && (
          <label 
            htmlFor={checkboxId} 
            className="text-sm font-medium text-text cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };