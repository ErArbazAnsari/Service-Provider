import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { RiFileEditFill } from "react-icons/ri";
import LightDarkMode from "../UI/LightDarkMode";

function AdminUsers() {
    // Page Title
    document.title = "Registered Users - Admin";

    const { authorizationToken, URI } = useAuth();
    const [allUsers, setAllUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [oldUserData, setOldUserData] = useState({
        username: "",
        email: "",
        phone: "",
    });
    const [editingUserId, setEditingUserId] = useState(null);

    // Fetch all users data from the backend
    const getAllUsersData = async () => {
        try {
            const response = await fetch(`${URI}/myapi/admin/users`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setAllUsers(data.users);
        } catch (error) {
            console.log("Error while getting data from backend", error);
            toast.error("Error fetching user data.");
        }
    };

    useEffect(() => {
        getAllUsersData();

        // Keyboard event listener for ESC and Enter keys
        const handleKeyDown = (e) => {
            if (open) {
                if (e.key === "Escape") {
                    setOpen(false); // Close modal on ESC
                } else if (e.key === "Enter") {
                    updateUserData(editingUserId); // Update data on Enter
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, editingUserId]);

    // Fetch existing user data for editing
    const fetchOldDataFrom = async (id) => {
        try {
            const response = await fetch(
                `${URI}/myapi/admin/users/edit/${id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setOldUserData(data.user);
        } catch (error) {
            console.log("Error while fetching old data from backend", error);
            toast.error("Error fetching user data for editing.");
        }
    };

    // Update new user data on the backend
    const updateUserData = async (id) => {
        try {
            const response = await fetch(
                `${URI}/myapi/admin/users/update/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(oldUserData),
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success("User data updated successfully.");
            getAllUsersData(); // Refresh the user list
            setOpen(false); // Close modal after updating
        } catch (error) {
            console.log("Error while updating data on backend", error);
            toast.error("Error updating user data.");
        }
    };

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setOldUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Delete user from the backend
    const deleteUser = async (id) => {
        try {
            const response = await fetch(
                `${URI}/myapi/admin/users/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success("User deleted successfully.");
            getAllUsersData(); // Refresh the user list
        } catch (error) {
            console.log("Error while deleting data on backend", error);
            toast.error("Error deleting user.");
        }
    };

    return (
        <div className="container mx-auto lg:px-48 md:px-5 sm:px-5 min-h-screen bg-white dark:bg-black py-24 text-black dark:text-white">
            <h1 className="text-3xl font-bold mb-6">Registered Users</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-600 dark:bg-gray-800 text-white">
                            <th className="py-3 px-4 text-left">Sr. No.</th>
                            <th className="py-3 px-4 text-left">Username</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Phone</th>
                            <th className="py-3 px-4 text-left">Admin</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user, index) => (
                            <tr
                                key={user._id}
                                className="border-b border-gray-200 dark:border-gray-700"
                            >
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{user.username}</td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4">{user.phone}</td>
                                <td className="py-2 px-4">
                                    {user.isAdmin ? "Yes" : "No"}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    <button
                                        className="bg-blue-500 text-white py-2 px-4 rounded-full mr-2 hover:bg-blue-600 transition-transform transform hover:scale-105"
                                        onClick={() => {
                                            setOpen(true);
                                            setEditingUserId(user._id);
                                            fetchOldDataFrom(user._id);
                                        }}
                                    >
                                        <BiSolidEdit />
                                    </button>
                                    <button
                                        className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105"
                                        onClick={() => deleteUser(user._id)}
                                    >
                                        <MdDeleteForever />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {open && (
                <Modal open={open} onClose={() => setOpen(false)}>
                    <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <button
                            className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                            onClick={() => setOpen(false)}
                        >
                            <IoMdCloseCircleOutline size={24} />
                        </button>
                        <RiFileEditFill
                            size={56}
                            className="mx-auto text-gray-900 dark:text-gray-100 mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 text-center mb-4">
                            Update User Data
                        </h3>
                        <div className="space-y-4">
                            <InputField
                                label="Username"
                                name="username"
                                value={oldUserData.username}
                                onChange={handleInputChange}
                            />
                            <InputField
                                label="Email"
                                name="email"
                                value={oldUserData.email}
                                onChange={handleInputChange}
                            />
                            <InputField
                                label="Phone"
                                name="phone"
                                value={oldUserData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition-transform transform hover:scale-105"
                                onClick={() => updateUserData(editingUserId)}
                            >
                                Update
                            </button>
                            <button
                                className="bg-gray-500 text-white py-2 px-4 rounded-lg w-full hover:bg-gray-600 transition-transform transform hover:scale-105"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
            )}

            {/* Light and Dark Mode */}
            <LightDarkMode />
        </div>
    );
}

// Modal component
function Modal({ open, onClose, children }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
                {children}
                <button
                    className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                    onClick={onClose}
                >
                    <IoMdCloseCircleOutline size={24} />
                </button>
            </div>
        </div>
    );
}

// Input Field Component
function InputField({ label, name, value, onChange }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                {label}
            </label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
            />
        </div>
    );
}

export default AdminUsers;
