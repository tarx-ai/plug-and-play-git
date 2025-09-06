import React from "react";
import { cn } from "@/lib/utils";

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const switchId = id || React.useId();
    
    return (
      <div className="flex items-center space-x-2">
        <div className="relative">
          <input
            id={switchId}
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            {...props}
          />
          <div className={cn(
            "w-11 h-6 bg-input border border-border rounded-full transition-colors duration-200",
            "peer-checked:bg-ds-primary peer-checked:border-ds-primary",
            "peer-focus:ring-2 peer-focus:ring-ds-primary peer-focus:ring-offset-2 peer-focus:ring-offset-bg",
            "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
            className
          )} />
          <div className={cn(
            "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200",
            "peer-checked:translate-x-5"
          )} />
        </div>
        {label && (
          <label 
            htmlFor={switchId} 
            className="text-sm font-medium text-text cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };