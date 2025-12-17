import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext"; // Adjust path based on your file structure
import { RouterProvider } from "react-router-dom";
import { router } from "./main";

// Adjust path based on your file structure
// Adjust the path where your router is created

// Root component to handle theme persistence
const RootWithTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  // Sync with localStorage on initial load and on theme change
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme); // Set theme from localStorage if it exists
    }

    document.documentElement.setAttribute("data-theme", theme); // Apply the theme globally
  }, [theme, setTheme]); // This effect will re-run whenever `theme` changes

  // Apply the theme globally using a class on the root div
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>
  );
};

export default RootWithTheme;
