import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import LightDarkMode from "../components/UI/LightDarkMode";

function Login() {
    document.title = "Login Page";

    // useNavigate
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    // Destructure necessary functions/values from useAuth
    const { storeTokenInLS, URI } = useAuth();

    // handle input
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    // handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Ensure URI is defined
        if (!URI) {
            toast.error("API URI is not defined");
            return;
        }

        try {
            const response = await fetch(`${URI}/myapi/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            // Check if response body exists before trying to parse it as JSON
            if (!response.ok) {
                const responseData = await response.json();
                toast.error(responseData.message || "Login failed");
                return;
            }

            const responseData = await response.json();

            // Store Token in Local Storage
            storeTokenInLS(responseData.token);

            setUser({ email: "", password: "" });
            toast.success("Login successful 😎");
            navigate("/");
        } catch (error) {
            console.log("Error While Logging In: ", error);
            toast.error("Something went wrong 😔");
        }
    };

    return (
        <div className="container mx-auto lg:my-24 md:my-10 sm:my-14 dark:bg-black px-10 lg:px-32">
            <div className="container max-w-lg mx-auto bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                    <img
                        src="https://i.pinimg.com/736x/4a/90/33/4a903338c0e478248153bd8f3f6f6745.jpg"
                        alt="Login"
                        className="w-full h-[180px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-white text-3xl font-bold">Login</h1>
                    </div>
                </div>
                <div className="p-8 dark:bg-gray-800">
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInput}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 dark:bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {/* Dark Mode Toggle */}
            <LightDarkMode />
        </div>
    );
}

export default Login;
