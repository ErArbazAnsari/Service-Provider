import { useAuth } from "../store/auth";
import LightDarkMode from "../components/UI/LightDarkMode";
import { NavLink } from "react-router-dom";

function About() {
    const { user, isLoggedIn } = useAuth();

    document.title = "About Us";

    return (
        <div
            className={`dark:black min-h-screen transition-colors duration-300 lg:my-8 md:my-0 sm:my-0 px-10 lg:px-32`}
        >
            <section className="about-section dark:black text-gray-900 dark:text-gray-200 min-h-screen">
                <main>
                    <div className="container mx-auto">
                        <div className="about-content max-w-4xl mx-auto dark:bg-black 800 p-8 py-0 rounded-lg">
                            <h1 className="text-3xl font-bold text-black text-center mb-8 dark:text-white">
                                About Us
                            </h1>
                            {isLoggedIn && (
                                <h3 className="text-xl mb-4 text-center ">
                                    Hello{" "}
                                    <span className="text-red-500 capitalize dark:text-yellow-300">
                                        {user.username},
                                    </span>{" "}
                                    Welcome
                                </h3>
                            )}
                            <div className="flex flex-col lg:flex-row  justify-around mb-12 gap-3">
                                <div className="lg:w-1/2 mb-6 lg:mb-0">
                                    <h2 className="text-3xl font-semibold mb-4">
                                        Our Mission
                                    </h2>
                                    <p className="text-lg">
                                        Our mission is to deliver top-notch
                                        services that exceed expectations. We
                                        are committed to quality, integrity, and
                                        customer satisfaction.
                                    </p>
                                </div>
                                <div className="lg:w-1/2">
                                    <h2 className="text-3xl font-semibold mb-4">
                                        Our History
                                    </h2>
                                    <p className="text-lg">
                                        Founded in 2020, Demo Company began with
                                        a vision to transform the industry. Over
                                        the years, we've grown significantly and
                                        continue to set new standards in our
                                        field.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-semibold mb-4">
                                    Meet the Team
                                </h2>
                                <p className="text-lg mb-4">
                                    Our team consists of experienced
                                    professionals who are passionate about what
                                    they do. Together, we drive innovation and
                                    deliver exceptional results.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Example team members */}
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                        <img
                                            src="/emp.png"
                                            alt="Team Member 1"
                                            className="w-32 h-32 rounded-full mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-semibold mb-2">
                                            John Doe
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            CEO
                                        </p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                        <img
                                            src="/emp.png"
                                            alt="Team Member 2"
                                            className="w-32 h-32 rounded-full mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-semibold mb-2">
                                            Jane Smith
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            CTO
                                        </p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                        <img
                                            src="/emp.png"
                                            alt="Team Member 3"
                                            className="w-32 h-32 rounded-full mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-semibold mb-2">
                                            Emily Johnson
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Lead Designer
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h2 className="text-3xl font-semibold mb-4">
                                    Get in Touch
                                </h2>
                                <p className="text-lg mb-4">
                                    We would love to hear from you! Feel free to
                                    reach out with any questions, feedback, or
                                    inquiries.
                                </p>
                                <NavLink
                                    to="/contact"
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Contact Us
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            {/* Dark Mode Toggle Button */}
            <LightDarkMode />
        </div>
    );
}

export default About;
