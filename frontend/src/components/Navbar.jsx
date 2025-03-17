import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
    const { isLoggedIn, isLoading, user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const AdminControl = () => {
        if (isLoggedIn && !isLoading && user.isAdmin) {
            return (
                <NavLink
                    to="/admin"
                    className="text-white bg-blue-600 font-semibold hover:bg-blue-700 active:bg-blue-800 dark:bg-white dark:text-black px-4 py-1 rounded-lg dark:hover:bg-gray-200 transition-all duration-300"
                >
                    Admin Panel
                </NavLink>
            );
        }
    };

    return (
        <header className="backdrop-filter backdrop-blur-lg shadow-md sticky w-full z-50 top-0 transition-all duration-300 px-3">
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white select-none hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                    Service <span className="text-lg">Provider</span>
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 lg:space-x-6 lg:flex lg:items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                isActive
                                    ? "font-semibold border-b-2 border-blue-500"
                                    : ""
                            }`
                        }
                    >
                        Contact Us
                    </NavLink>

                    {isLoggedIn ? (
                        <>
                            <AdminControl />
                            <NavLink
                                to="/logout"
                                className="text-white bg-blue-600 font-semibold hover:bg-blue-700 active:bg-blue-800 dark:bg-white dark:text-black px-4 py-1 rounded-lg dark:hover:bg-gray-200 transition-all duration-300"
                            >
                                Logout
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                        isActive
                                            ? "font-semibold border-b-2 border-blue-500"
                                            : ""
                                    }`
                                }
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                        isActive
                                            ? "font-semibold border-b-2 border-blue-500"
                                            : ""
                                    }`
                                }
                            >
                                Login
                            </NavLink>
                        </>
                    )}
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-300"
                    >
                        {isMenuOpen ? (
                            <MdClose className="w-6 h-6" />
                        ) : (
                            <MdMenu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white dark:bg-black shadow-lg p-6 mt-2 rounded-lg">
                    <ul className="flex flex-col space-y-6 text-center">
                        <NavLink
                            to="/"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/products"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={toggleMenu}
                            className={({ isActive }) =>
                                `text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 ${
                                    isActive
                                        ? "font-semibold border-b-2 border-blue-500"
                                        : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>

                        {isLoggedIn ? (
                            <NavLink
                                to="/logout"
                                onClick={toggleMenu}
                                className="text-white bg-blue-600 font-semibold hover:bg-blue-700 active:bg-blue-800 dark:bg-white dark:text-black px-4 py-2 rounded-lg dark:hover:bg-gray-200 transition-all duration-300"
                            >
                                Logout
                            </NavLink>
                        ) : (
                            <>
                                <NavLink
                                    to="/register"
                                    onClick={toggleMenu}
                                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                >
                                    Register
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    onClick={toggleMenu}
                                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                >
                                    Login
                                </NavLink>
                            </>
                        )}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
