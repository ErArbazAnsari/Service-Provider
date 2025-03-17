import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import LightDarkMode from "../UI/LightDarkMode";

function AdminDashboard() {
    useEffect(() => {
        document.title = "Admin Dashboard";
    }, []);

    const { authorizationToken, URI } = useAuth();

    const [dateTime, setDateTime] = useState(new Date());
    const [summary, setSummary] = useState({
        totalRegisteredUsers: 0,
        totalServices: 0,
        totalReceivedMessages: 0,
        recentActivities: [],
    });

    const fetchData = async () => {
        try {
            const [usersResponse, messagesResponse, servicesResponse] =
                await Promise.all([
                    fetch(`${URI}/myapi/admin/users/total`, {
                        method: "GET",
                        headers: { Authorization: authorizationToken },
                    }),
                    fetch(`${URI}/myapi/admin/contacts/total`, {
                        method: "GET",
                        headers: { Authorization: authorizationToken },
                    }),
                    fetch(`${URI}/myapi/admin/services/total`, {
                        method: "GET",
                        headers: { Authorization: authorizationToken },
                    }),
                ]);

            if (
                !usersResponse.ok ||
                !messagesResponse.ok ||
                !servicesResponse.ok
            ) {
                throw new Error("One or more API calls failed");
            }

            const usersCount = await usersResponse.json();
            const messageCount = await messagesResponse.json();
            const servicesCount = await servicesResponse.json();

            setSummary({
                totalRegisteredUsers: usersCount.regUser || 0,
                totalReceivedMessages: messageCount.allMsg || 0,
                totalServices: servicesCount.allMsg || 0,
                recentActivities: summary.recentActivities,
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [authorizationToken]);

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className="container mx-auto lg:px-48 md:px-5 sm:px-5 min-h-screen dark:bg-black text-gray-800 dark:text-white py-28">
            <div className="flex flex-col items-center justify-center h-48">
                <div className="text-center">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                        {dateTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                        })}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl font-light">
                        {dateTime.toLocaleDateString([], {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </p>
                </div>
            </div>

            <section className="my-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                    Admin Dashboard Summary
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link
                        to="/admin/users"
                        className="bg-blue-600 text-white p-4 md:p-6 rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-blue-500"
                    >
                        <h3 className="text-xl font-semibold">
                            Registered Users
                        </h3>
                        <p className="text-2xl mt-2">
                            {summary.totalRegisteredUsers}
                        </p>
                    </Link>
                    <Link
                        to="/admin/contacts"
                        className="bg-green-600 text-white p-4 md:p-6 rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-green-500"
                    >
                        <h3 className="text-xl font-semibold">
                            Received Messages
                        </h3>
                        <p className="text-2xl mt-2">
                            {summary.totalReceivedMessages}
                        </p>
                    </Link>
                    <Link
                        to="/admin/services"
                        className="bg-red-600 text-white p-4 md:p-6 rounded-lg shadow-lg transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-red-500"
                    >
                        <h3 className="text-xl font-semibold">Our Services</h3>
                        <p className="text-2xl mt-2">{summary.totalServices}</p>
                    </Link>
                </div>
            </section>

            <LightDarkMode />
        </div>
    );
}

export default AdminDashboard;
