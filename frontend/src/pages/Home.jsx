import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LightDarkMode from "../components/UI/LightDarkMode";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

// Dummy data
const featuredServices = [
    {
        title: "Sale Laptop/Desktop",
        description:
            "Expert sale and purchase of laptops and desktops with warranty.",
        icon: "💻",
    },
    {
        title: "Provide IT Support",
        description:
            "Comprehensive IT support for small and medium-sized businesses.",
        icon: "🔧", // You can use any icon or image here
    },

    {
        title: "Network Solutions",
        description: "Customized network solutions for homes and offices.",
        icon: "🌐",
    },
    {
        title: "Computer Repairing",
        description:
            "Reliable repair services for laptops, desktops, and more.",
        icon: "🖥️",
    },
];

// recent updates
const recentUpdates = [
    {
        title: "Launch of New Product Line",
        detail: "We are thrilled to announce the launch of our latest product line with innovative features.",
    },
    {
        title: "Expansion to New Regions",
        detail: "Our services are now available in additional regions, bringing quality and convenience closer.",
    },
    {
        title: "New Partnership",
        detail: "Excited to collaborate with industry leaders to offer comprehensive solutions to our customers.",
    },
    {
        title: "Upcoming Webinar",
        detail: "Join our experts to discuss the latest market trends and strategies to leverage them.",
    },
    {
        title: "Website Redesign",
        detail: "We have revamped our website for a better user experience, optimized navigation, and modern aesthetics.",
    },
    {
        title: "Quarterly Report Released",
        detail: "Our latest quarterly report is now available, showcasing key achievements and financial performance.",
    },
    {
        title: "Customer Success Story",
        detail: "Read about how one of our clients achieved remarkable results using our solutions and services.",
    },
    {
        title: "Employee Spotlight",
        detail: "Celebrating our outstanding team members who contribute to our success and embody our core values.",
    },
];

const customerReviews = [
    {
        id: 1,
        image: "https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6",
        name: "John Doe",
        review: "Excellent product! Highly recommend it.",
        rating: 5,
    },
    {
        id: 2,
        image: "https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6",
        name: "Jane Smith",
        review: "Good quality, but a bit pricey.",
        rating: 4,
    },
    {
        id: 3,
        image: "https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6",
        name: "David Brown",
        review: "Not satisfied with the performance.",
        rating: 2,
    },
    {
        id: 4,
        image: "https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6",
        name: "Alice Green",
        review: "Excellent product! Highly recommend it.",
        rating: 4,
    },
    {
        id: 5,
        image: "https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6",
        name: "Jane Smith",
        review: "Good quality, but a bit pricey.",
        rating: 4,
    },
    {
        id: 6,
        image: "https://www.aiscribbles.com/img/variant/large-preview/9570/?v=5528a6",
        name: "Jane Smith",
        review: "Good quality, but a bit pricey.",
        rating: 4,
    },
];
function Home() {
    document.title = "Service Provider - IT Solutions";
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [reviewer, setReviewer] = useState("");
    const [reviewerMessage, setReviewerMessage] = useState("");
    const [loading, setLoading] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setLoading(0);
        }, 300);
    }, []);
    if (loading)
        return (
            <div className="flex justify-center items-center min-h-screen">
                <HashLoader />
            </div>
        );

    return (
        <div
            className={`container mx-auto min-h-screen transition-colors duration-300 lg:my-8 md:my-0 sm:my-0 lg:mb-0`}
        >
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <Carousel
                    showArrows={true}
                    showIndicators={true}
                    showStatus={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                    showThumbs={false}
                    className="carousel-container overflow-hidden lg:rounded-2xl md:rounded-2xl bg-transparent md:mx-6 sm:mx-8"
                >
                    {/* Slide 1 */}
                    <div className="relative text-white h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                        <div className="absolute inset-0 bg-black bg-opacity-70 lg:rounded-2xl md:rounded-2xl overflow-hidden">
                            <img
                                src="/hero1.jpg"
                                alt="IT Solutions Partner Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-4">
                            Your IT Solutions Partner
                        </p>
                    </div>

                    {/* Slide 2 */}
                    <div className="relative text-white h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                        <div className="absolute inset-0 bg-black bg-opacity-70 lg:rounded-2xl md:rounded-2xl overflow-hidden">
                            <img
                                src="/hero2.png"
                                alt="Expert IT Support & Services Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-4">
                            Expert IT Support & Services
                        </p>
                    </div>

                    {/* Slide 3 */}
                    <div className="relative text-white h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center">
                        <div className="absolute inset-0 bg-black bg-opacity-70 lg:rounded-2xl md:rounded-2xl overflow-hidden">
                            <img
                                src="/hero3.png"
                                alt="Securing Digital Future Image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center px-4">
                            Securing Your Digital Future
                        </p>
                    </div>
                </Carousel>
            </section>

            {/* Featured Products */}
            <section className="pb-16 pt-8 px-6 sm:px-8 md:px-16 lg:px-32 dark:bg-black">
                <div className="container mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                        Featured Products
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full hover:scale-105 transition duration-300 cursor-pointer">
                            <img
                                src="/Products/apple2.png"
                                alt="Product 1"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">
                                Apple MacBook Air
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                $99.99
                            </p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full hover:scale-105 transition duration-300 cursor-pointer">
                            <img
                                src="/Products/apple.png"
                                alt="Product 2"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">
                                MacBook Pro M3
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                $129.99
                            </p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full hover:scale-105 transition duration-300 cursor-pointer">
                            <img
                                src="/Products/asus.png"
                                alt="Product 3"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">
                                Asus ZenBook
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                $149.99
                            </p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full hover:scale-105 transition duration-300 cursor-pointer">
                            <img
                                src="/Products/apple2.png"
                                alt="Product 1"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">
                                Apple MacBook Air
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                $99.99
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-16">
                        <a
                            href="/products"
                            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
                        >
                            View More Products
                        </a>
                    </div>
                </div>
            </section>

            {/* Featured Services Section */}
            <section className="pb-16 pt-8 px-6 sm:px-8 md:px-16 lg:px-32">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 dark:text-white">
                        Our Featured Services
                    </h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {featuredServices.map((service, index) => (
                            <div
                                key={index}
                                className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full hover:scale-105 transition duration-300 cursor-pointer"
                            >
                                <div className="text-4xl sm:text-5xl mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black dark:text-gray-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <a
                            href="/services"
                            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold"
                        >
                            See More Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Recent Updates Section */}
            <section className="py-16 pt-8 px-4 sm:px-8 md:px-16 lg:px-24 dark:bg-black">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800 dark:text-white">
                        Recent Updates
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {recentUpdates.map((update, index) => (
                            <div
                                key={index}
                                className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center w-full hover:scale-105 transition duration-300 cursor-pointer"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <span className="text-blue-500 text-4xl dark:text-blue-400">
                                        {/* Example icon */}
                                        <i className="fas fa-bell"></i>
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                                    {update.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {update.detail}
                                </p>
                                <a
                                    href="/updates"
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 font-semibold"
                                >
                                    Read more →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="pb-8 pt-8 dark:bg-black">
                <div className="container mx-auto text-center lg:max-w-[600px] md:max-w-[500px] sm:max-w-[430px]">
                    <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                        Customer Reviews
                    </h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                            name="reviewer"
                            value={reviewer}
                            onChange={(e) => setReviewer(e.target.value)}
                        />
                        <textarea
                            placeholder="Write your review..."
                            className="w-full p-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all"
                            rows="4"
                            value={reviewerMessage}
                            name="reviewerMessage"
                            onChange={(e) => setReviewerMessage(e.target.value)}
                        ></textarea>
                        <button
                            onClick={() => {
                                console.log(reviewer, reviewerMessage);

                                setReviewer("");
                                setReviewerMessage("");
                                toast.success("Review Submitted 😅");
                            }}
                            className="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 px-6 py-3 rounded-lg font-semibold transition-all"
                            aria-label="Submit Review"
                        >
                            Submit Review
                        </button>
                    </div>
                </div>
            </section>

            {/* Previous Review checking */}
            <section className="pb-16 px-6 sm:px-16 md:px-32 lg:px-48">
                <div className="container mx-auto text-center">
                    <button
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        className="mb-8 px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300 font-semibold"
                    >
                        Check Customer Reviews
                    </button>

                    {drawerOpen && (
                        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-end">
                            <div className="bg-white dark:bg-gray-800 w-full max-h-80vh overflow-y-auto rounded-t-lg shadow-lg p-6">
                                <button
                                    onClick={() => setDrawerOpen(false)}
                                    className=" hover:bg-red-800 transition duration-300 text-sm mb-4 bg-red-600 text-white p-2 px-5 rounded-lg font-semibold"
                                >
                                    Close
                                </button>
                                <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">
                                    Customer Reviews
                                </h2>
                                <div className="flex gap-6 scroll-auto container mx-auto">
                                    {customerReviews.map((review, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-50 dark:bg-gray-700 shadow-md rounded-lg p-3 text-center transform transition duration-300 hover:scale-105 max-w-60 min-w-52"
                                        >
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                                            />
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {review.name}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                                {review.review}
                                            </p>
                                            <p className="text-yellow-500 text-lg font-bold">
                                                {"★".repeat(review.rating) +
                                                    "☆".repeat(
                                                        5 - review.rating
                                                    )}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Light And Dark Mode Component*/}
            <LightDarkMode />
        </div>
    );
}

export default Home;
