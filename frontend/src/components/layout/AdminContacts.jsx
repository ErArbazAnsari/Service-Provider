import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import LightDarkMode from "../UI/LightDarkMode";

function AdminContacts() {
    // Page Title
    document.title = "All Messages - Admin";

    const { authorizationToken, URI } = useAuth();
    const [allContacts, setAllContacts] = useState([]);

    // Fetch all contacts from the database
    const getAllContacts = async () => {
        try {
            const response = await fetch(`${URI}/myapi/admin/contacts`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (!response.ok) {
                toast.error("Error while fetching contacts data from backend.");
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const contacts = await response.json();
            setAllContacts(contacts);
        } catch (error) {
            console.log(
                "Error while fetching contacts data from backend",
                error
            );
        }
    };

    useEffect(() => {
        getAllContacts();
    }, [authorizationToken]); // Ensure the useEffect only runs when authorizationToken changes

    // Delete contact
    const deleteContact = async (id) => {
        try {
            const response = await fetch(
                `${URI}/myapi/admin/contacts/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );

            if (!response.ok) {
                toast.error("Error while deleting contact.");
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success("Contact deleted successfully.");
            getAllContacts(); // Refresh the contacts list
        } catch (error) {
            console.log("Error while deleting contact", error);
        }
    };

    return (
        <div className="container mx-auto lg:px-48 md:px-5 sm:px-5 min-h-screen bg-white dark:bg-black py-24 text-black dark:text-white">
            <h1 className="text-3xl font-bold mb-6">All Messages</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-600 dark:bg-gray-800 text-white">
                            <th className="py-3 px-4 text-left">Sr. No.</th>
                            <th className="py-3 px-4 text-left">Username</th>
                            <th className="py-3 px-4 text-left">Email</th>
                            <th className="py-3 px-4 text-left">Message</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allContacts.map((contact, index) => (
                            <tr
                                key={contact._id}
                                className="border-b border-gray-200 dark:border-gray-700"
                            >
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">
                                    {contact.username}
                                </td>
                                <td className="py-2 px-4">{contact.email}</td>
                                <td className="py-2 px-4">{contact.message}</td>
                                <td className="py-2 px-4 text-center">
                                    <button
                                        className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105"
                                        onClick={() =>
                                            deleteContact(contact._id)
                                        }
                                    >
                                        <MdDeleteForever size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Dark and Light mode */}
            <LightDarkMode />
        </div>
    );
}

export default AdminContacts;
