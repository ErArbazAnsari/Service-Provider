import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function LightDarkMode() {
    // Initialize state based on localStorage value or default to light mode
    const [isDarkMode, setIsDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("Theme")) || false
    );

    // Apply the current theme to the document on initial render
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("Theme", JSON.stringify(newMode));

        // Toggle the dark mode class on the document
        if (newMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div>
            {/* Dark/Light Mode Toggle */}
            <div className="fixed bottom-5 right-5 z-50">
                <button
                    onClick={toggleDarkMode}
                    className="ml-4 p-2 rounded-full dark:bg-yellow-500 dark:hover:bg-yellow-600 bg-gray-600 hover:bg-gray-900"
                >
                    {isDarkMode ? (
                        <FaSun className="w-7 h-7 text-white" />
                    ) : (
                        <FaMoon className="w-7 h-7 text-white" />
                    )}
                </button>
            </div>
        </div>
    );
}

export default LightDarkMode;
