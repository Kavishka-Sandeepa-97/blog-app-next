"use client";
import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({ theme: "light" }); // Provide a default value or type as needed

const getFromLocalStorage = () => {
  if (typeof window === "undefined") return "light";
  const theme = localStorage.getItem("theme");
  return theme ?? "light";
};


export function ThemeContextProvider({ children }: { children: React.ReactNode }) {

  const [theme, setTeme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTeme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}


