import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect } from "react";

function Footer() {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    // Scroll to top on every route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <footer className="bg-white dark:bg-black shadow-lg py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    {/* Footer Navigation Links */}
                    <nav className="mb-4">
                        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `text-gray-800 dark:text-gray-200 ${
                                            isActive
                                                ? "text-blue-500 dark:text-blue-400"
                                                : "hover:text-blue-500 dark:hover:text-blue-400"
                                        } transition-colors duration-300`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `text-gray-800 dark:text-gray-200 ${
                                            isActive
                                                ? "text-blue-500 dark:text-blue-400"
                                                : "hover:text-blue-500 dark:hover:text-blue-400"
                                        } transition-colors duration-300`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `text-gray-800 dark:text-gray-200 ${
                                            isActive
                                                ? "text-blue-500 dark:text-blue-400"
                                                : "hover:text-blue-500 dark:hover:text-blue-400"
                                        } transition-colors duration-300`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `text-gray-800 dark:text-gray-200 ${
                                            isActive
                                                ? "text-blue-500 dark:text-blue-400"
                                                : "hover:text-blue-500 dark:hover:text-blue-400"
                                        } transition-colors duration-300`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            {isLoggedIn ? (
                                <li>
                                    <NavLink
                                        to="/logout"
                                        className={({ isActive }) =>
                                            `text-gray-800 dark:text-gray-200 ${
                                                isActive
                                                    ? "text-blue-500 dark:text-blue-400"
                                                    : "hover:text-blue-500 dark:hover:text-blue-400"
                                            } transition-colors duration-300`
                                        }
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink
                                            to="/register"
                                            className={({ isActive }) =>
                                                `text-gray-800 dark:text-gray-200 ${
                                                    isActive
                                                        ? "text-blue-500 dark:text-blue-400"
                                                        : "hover:text-blue-500 dark:hover:text-blue-400"
                                                } transition-colors duration-300`
                                            }
                                        >
                                            Register
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/login"
                                            className={({ isActive }) =>
                                                `text-gray-800 dark:text-gray-200 ${
                                                    isActive
                                                        ? "text-blue-500 dark:text-blue-400"
                                                        : "hover:text-blue-500 dark:hover:text-blue-400"
                                                } transition-colors duration-300`
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>

                    {/* Footer Content */}
                    <div className="text-center text-gray-600 dark:text-gray-400">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} PCS Infoways. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
