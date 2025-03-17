import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import LightDarkMode from "../components/UI/LightDarkMode";

function Contact() {
    const navigate = useNavigate();
    const { user, URI } = useAuth();

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        document.title = "Contact Us";
        if (user) {
            setContact({
                username: user.username,
                email: user.email,
                message: "",
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${URI}/myapi/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            if (!response.ok) {
                toast.error("Message Not Sent 😑");
            } else {
                setContact({ username: "", email: "", message: "" });
                toast.success("Message sent successfully 😎");
                navigate("/");
            }
        } catch (error) {
            console.error("Error sending message: ", error);
        }
    };

    return (
        <div className="container mx-auto lg:my-24 md:my-10 sm:my-14 dark:black px-10 lg:px-32">
            <main className="container max-w-4xl mx-auto bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left section for larger screens */}
                    <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 to-blue-500 text-white p-8 lg:p-10">
                        <h2 className="text-3xl font-bold mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-center text-lg mb-6">
                            We’re here to help. Send us your questions or
                            feedback, and we’ll get back to you as soon as
                            possible.
                        </p>
                        <img
                            src="/contact.png"
                            alt="Contact Us"
                            className="max-w-xs h-auto rounded-lg shadow-md"
                        />
                    </div>

                    {/* Contact form */}
                    <div className="p-6 sm:p-8 bg-white dark:bg-gray-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">
                                Contact Us
                            </h1>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={contact.username}
                                    autoComplete="off"
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500"
                                    required
                                />
                            </div>
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
                                    value={contact.email}
                                    autoComplete="off"
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={contact.message}
                                    onChange={handleInputChange}
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-2 h-32 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-teal-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold hover:from-teal-600 hover:to-blue-700 transition duration-200 focus:ring-2 focus:ring-teal-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <LightDarkMode />
        </div>
    );
}

export default Contact;
