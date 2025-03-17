import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import LightDarkMode from "../UI/LightDarkMode";

function AdminServices() {
    // Page Title
    useEffect(() => {
        document.title = "Our Services - Admin";
    }, []);

    const { authorizationToken, URI } = useAuth();
    const [allServices, setAllServices] = useState([]);
    const [open, setOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false); // Track whether the modal is for editing or adding
    const [serviceData, setServiceData] = useState({
        service: "",
        description: "",
        price: "",
        provider: "",
    });

    // Insert service data to the backend
    const insertService = async () => {
        try {
            const response = await fetch(
                `${URI}/myapi/admin/services/service/add`,
                {
                    method: "POST",
                    headers: {
                        Authorization: authorizationToken,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(serviceData),
                }
            );

            if (!response.ok) {
                toast.error("Error while inserting service on backend");
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success("Service inserted successfully");
            getAllServices();
            setOpen(false);
        } catch (error) {
            console.error("Error while inserting service on backend", error);
        }
    };

    // Fetch all services data from the backend
    const getAllServices = async () => {
        try {
            const response = await fetch(`${URI}/myapi/admin/services`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (!response.ok) {
                toast.error("Error while getting services data from backend");
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setAllServices(data.allServices);
        } catch (error) {
            console.error(
                "Error while getting services data from backend",
                error
            );
        }
    };

    useEffect(() => {
        getAllServices();

        const handleKeyDown = (e) => {
            if (open) {
                if (e.key === "Escape") {
                    setOpen(false);
                } else if (e.key === "Enter") {
                    if (isEditMode) {
                        updateServiceData(serviceData._id);
                    } else {
                        insertService();
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, serviceData, isEditMode]);

    // Fetch old service data from database
    const fetchOldServiceData = async (id) => {
        try {
            const oldData = await fetch(
                `${URI}/myapi/admin/services/edit/${id}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );

            if (!oldData.ok) {
                toast.error("Error while fetching old data from backend");
                throw new Error(`HTTP error! status: ${oldData.status}`);
            }

            const data = await oldData.json();
            setServiceData(data);
        } catch (error) {
            console.error("Error while fetching old data from backend", error);
        }
    };

    // Update service data on the backend
    const updateServiceData = async (id) => {
        try {
            const response = await fetch(
                `${URI}/myapi/admin/services/update/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(serviceData),
                }
            );

            if (!response.ok) {
                toast.error("Error while updating service on backend");
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success("Service updated successfully");
            getAllServices();
            setOpen(false);
        } catch (error) {
            console.error("Error while updating service on backend", error);
        }
    };

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setServiceData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Delete service from the backend
    const deleteService = async (id) => {
        try {
            const response = await fetch(
                `${URI}/myapi/admin/services/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    },
                }
            );

            if (!response.ok) {
                toast.error("Error while deleting service on backend");
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            toast.success("Service deleted successfully");
            getAllServices();
        } catch (error) {
            console.error("Error while deleting service on backend", error);
        }
    };

    // Open the modal for adding a new service
    const handleAddService = () => {
        setIsEditMode(false);
        setServiceData({
            service: "",
            description: "",
            provider: "",
        });
        setOpen(true);
    };

    return (
        <div className="container mx-auto lg:px-48 md:px-5 sm:px-5 min-h-screen bg-white dark:bg-black py-24 text-black dark:text-white">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold mb-6">Our Services</h1>
                <button
                    className="mb-6 text-lg bg-green-600 rounded-lg px-2 shadow-lg hover:bg-green-700 active:bg-green-600 font-semibold text-white"
                    onClick={handleAddService}
                >
                    Add Service
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg">
                    <thead className="bg-gray-600 dark:bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Sr. No.</th>
                            <th className="py-3 px-4 text-left">Service</th>
                            <th className="py-3 px-4 text-left">Description</th>
                            <th className="py-3 px-4 text-left">Provider</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800 dark:text-gray-200">
                        {allServices.map((service, index) => (
                            <tr
                                key={service._id}
                                className="border-b border-gray-200 dark:border-gray-700"
                            >
                                <td className="py-2 px-4">{index + 1}</td>
                                <td className="py-2 px-4">{service.service}</td>
                                <td className="py-2 px-4">
                                    {service.description}
                                </td>
                                <td className="py-2 px-4">
                                    {service.provider}
                                </td>
                                <td className="py-2 px-4 flex justify-center">
                                    <button
                                        className="bg-blue-500 text-white py-2 px-4 rounded-full mr-2 hover:bg-blue-600 transition-transform transform hover:scale-105"
                                        onClick={() => {
                                            setIsEditMode(true);
                                            setOpen(true);
                                            fetchOldServiceData(service._id);
                                        }}
                                    >
                                        <BiSolidEdit className="text-lg" />
                                    </button>
                                    <button
                                        className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105"
                                        onClick={() =>
                                            deleteService(service._id)
                                        }
                                    >
                                        <MdDeleteForever className="text-lg" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                        <h2 className="text-lg font-semibold mb-4 text-center">
                            {isEditMode ? "Edit Service" : "Add Service"}
                        </h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (isEditMode) {
                                    updateServiceData(serviceData._id);
                                } else {
                                    insertService();
                                }
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Service
                                </label>
                                <input
                                    type="text"
                                    name="service"
                                    value={serviceData.service}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={serviceData.description}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    value={serviceData.price}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
                                    
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2">
                                    Provider
                                </label>
                                <input
                                    type="text"
                                    name="provider"
                                    value={serviceData.provider}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
                                    
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="bg-gray-600 text-white py-2 px-4 rounded mr-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150 ease-in-out"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <LightDarkMode />
        </div>
    );
}

export default AdminServices;
