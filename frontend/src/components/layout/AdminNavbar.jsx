import { NavLink } from "react-router-dom";
import { MdLogout } from "react-icons/md";

function AdminNavbar() {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md rounded-full px-6 py-2 flex justify-between items-center max-w-7xl mx-auto fixed top-0 left-0 right-0 z-50">
            {/* Logo and Admin Panel Link */}
            <div className="flex items-center">
                <NavLink to="/admin">
                    <img
                        src="/adminLogo.webp"
                        alt="AdminLogo"
                        className="h-12 w-12 rounded-full"
                    />
                </NavLink>
                <NavLink to="/admin">
                    <span className="ml-3 text-2xl font-semibold text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white">
                        AdminPanel
                    </span>
                </NavLink>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-6">
                <NavLink
                    to="/admin/users"
                    className={({ isActive }) =>
                        `text-gray-900 dark:text-gray-100 ${
                            isActive
                                ? "text-black font-semibold"
                                : "hover:text-blue-700 dark:hover:text-blue-400 "
                        } transition-transform duration-200`
                    }
                >
                    Users
                </NavLink>
                <NavLink
                    to="/admin/contacts"
                    className={({ isActive }) =>
                        `text-gray-900 dark:text-gray-100 ${
                            isActive
                                ? "text-black font-semibold"
                                : "hover:text-blue-700 dark:hover:text-blue-400 "
                        } transition-transform duration-200`
                    }
                >
                    Contacts
                </NavLink>
                <NavLink
                    to="/admin/services"
                    className={({ isActive }) =>
                        `text-gray-900 dark:text-gray-100 ${
                            isActive
                                ? "text-black font-semibold"
                                : "hover:text-blue-700 dark:hover:text-blue-400 "
                        } transition-transform duration-200`
                    }
                >
                    Services
                </NavLink>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-black dark:text-gray-100 ${
                            isActive
                                ? "text-black font-semibold"
                                : "hover:text-blue-700 dark:hover:text-blue-400 "
                        } transition-transform duration-200`
                    }
                >
                    Website
                </NavLink>
                {/* Logout Button */}
                <NavLink
                    to="/logout"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300"
                >
                    <MdLogout
                        className="h-6 w-6 hover:scale-110 transition-transform duration-200"
                        aria-label="Logout"
                        title="logout"
                    />
                </NavLink>
            </nav>
        </header>
    );
}

export default AdminNavbar;
