import React, { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.getElementById("root").classList.toggle("dark", !isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow transition hover:scale-105 hover:shadow-lg"
      aria-label="Toggle theme"
    >
      {isDarkMode ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;