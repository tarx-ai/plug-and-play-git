import { twMerge } from "tailwind-merge";

type ClassValue = 
  | string 
  | number 
  | boolean 
  | undefined 
  | null
  | { [key: string]: any }
  | ClassValue[];

function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  
  inputs.forEach((input) => {
    if (!input) return;
    
    if (typeof input === 'string' || typeof input === 'number') {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      const inner = clsx(...input);
      if (inner) classes.push(inner);
    } else if (typeof input === 'object') {
      Object.entries(input).forEach(([key, value]) => {
        if (value) classes.push(key);
      });
    }
  });
  
  return classes.join(' ');
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}