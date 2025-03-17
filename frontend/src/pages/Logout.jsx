import React from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import LightDarkMode from "../components/UI/LightDarkMode";

function Logout() {
    document.title = "Logout";
    const { LogoutUser } = useAuth();

    React.useEffect(() => {
        if (localStorage.getItem("token")) {
            LogoutUser();
            toast.success("Logout Successfully");
        }
    }, [LogoutUser]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 px-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8">
                <h1 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-4">
                    You've Been Logged Out
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                    Thank you for using our service. You have successfully
                    logged out.
                </p>
                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="inline-block bg-blue-500 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 transform hover:scale-105"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
            <LightDarkMode />
        </div>
    );
}

export default Logout;
