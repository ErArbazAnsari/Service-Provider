import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LightDarkMode from "../components/UI/LightDarkMode";
// import { toast } from "react-toastify";

function Error() {
    useEffect(() => {
        document.title = "404 Error";
        // toast.error("Page not found!");
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black mt-[-100px]">
            <div className="text-center p-8">
                <h1 className="text-8xl font-bold text-gray-800 dark:text-white">
                    404
                </h1>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Oops! The page you are looking for does not exist.
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    It might have been moved or deleted.
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                >
                    Go Back Home
                </Link>
            </div>
            {/* Light and Dark Mode */}
            <LightDarkMode />
        </div>
    );
}

export default Error;
