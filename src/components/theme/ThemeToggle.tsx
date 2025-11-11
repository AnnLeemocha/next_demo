"use client";

import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer disabled:cursor-not-allowed border border-gray-300 dark:border-gray-500">變更主題 ➤ {theme === "dark" ? "☀️" : "🌙"}</button>
    )
}
