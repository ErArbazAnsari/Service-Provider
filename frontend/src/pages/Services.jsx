import React, { useState } from "react";
import LightDarkMode from "../components/UI/LightDarkMode";
import { useAuth } from "../store/auth";
import { HashLoader } from "react-spinners";

function Services() {
    document.title = "Services";
    const { URI } = useAuth();
    const [services, setServices] = React.useState([]);
    const [loading, setLoading] = useState(1);

    // Fetch data from the backend
    const fetchServices = async () => {
        try {
            const response = await fetch(`${URI}/myapi/data/service`);
            if (!response.ok) {
                console.error("Error fetching data from backend");
            }
            const data = await response.json();
            setServices(data.allServices || []);
            setLoading(0);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    React.useEffect(() => {
        fetchServices();
    }, []);

    if (loading) return <div className="flex justify-center items-center min-h-screen">
        <HashLoader/>
    </div>;
    return (
        <div className="container mx-auto lg:my-8 md:my-0 sm:my-0 dark:black px-12 lg:px-32 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
                Our Services
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {services.map((service) => (
                    <div
                        key={service._id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition transform hover:scale-[1.02] hover:shadow-lg min-w-48"
                    >
                        <div className="mb-4 flex justify-center">
                            <img
                                src={"/services1.png"}
                                alt={service.service}
                                className="h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-700"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            {service.service}
                        </h2>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {service.provider}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                            {service.description.length > 60
                                ? service.description.slice(0, 55) + "..."
                                : service.description}
                        </p>
                        <div className="mt-4">
                            <a
                                href="#"
                                className="text-blue-500 dark:text-blue-400 font-medium hover:underline"
                            >
                                Learn More &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <LightDarkMode />
        </div>
    );
}

export default Services;
