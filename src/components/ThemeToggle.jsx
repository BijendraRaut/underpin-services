// src/components/ThemeToggle.jsx
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(TaskContext);

  return (
    <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
