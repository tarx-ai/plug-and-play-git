"use client";

export type Theme = "light" | "dark" | "tarx";

const THEME_KEY = "theme";

export function getTheme(): Theme {
  if (typeof window === "undefined") return "light";
  
  const stored = localStorage.getItem(THEME_KEY) as Theme;
  if (stored && ["light", "dark", "tarx"].includes(stored)) {
    return stored;
  }
  
  // Default to user's system preference, fallback to light
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function setTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.setAttribute("data-theme", theme);
  
  // Also set the class for compatibility with existing dark mode setup
  if (theme === "dark" || theme === "tarx") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function initTheme() {
  if (typeof window === "undefined") return;
  
  const theme = getTheme();
  setTheme(theme);
}

export function toggleTheme() {
  const current = getTheme();
  const themes: Theme[] = ["light", "dark", "tarx"];
  const currentIndex = themes.indexOf(current);
  const nextIndex = (currentIndex + 1) % themes.length;
  setTheme(themes[nextIndex]);
}

// Keyboard shortcut handler
export function setupThemeShortcut() {
  if (typeof window === "undefined") return;
  
  function handleKeydown(event: KeyboardEvent) {
    // Cmd/Ctrl + J to toggle theme
    if ((event.metaKey || event.ctrlKey) && event.key === "j") {
      event.preventDefault();
      toggleTheme();
    }
  }
  
  document.addEventListener("keydown", handleKeydown);
  
  return () => {
    document.removeEventListener("keydown", handleKeydown);
  };
}

// Hook for React components
export function useTheme() {
  const [theme, setThemeState] = React.useState<Theme>(getTheme);
  
  React.useEffect(() => {
    initTheme();
    const cleanup = setupThemeShortcut();
    
    // Listen for storage changes (theme changes in other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_KEY && e.newValue) {
        setThemeState(e.newValue as Theme);
        setTheme(e.newValue as Theme);
      }
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      cleanup?.();
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setThemeState(newTheme);
  };
  
  return {
    theme,
    setTheme: changeTheme,
    toggleTheme: () => {
      toggleTheme();
      setThemeState(getTheme());
    },
  };
}

// React import fix
import React from "react";