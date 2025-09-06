"use client";

import React from "react";
import { initTheme, setupThemeShortcut } from "@/lib/theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Initialize theme on client side
    initTheme();
    
    // Setup keyboard shortcut
    const cleanup = setupThemeShortcut();
    
    return cleanup;
  }, []);
  
  return <>{children}</>;
}