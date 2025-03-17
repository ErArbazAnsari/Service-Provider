import React from "react";
import LightDarkMode from "../components/UI/LightDarkMode";

// Demo data for products
const demoProducts = [
    {
        id: 1,
        name: "Product 1",
        description: "This is a description of Product 1.",
        price: "$49.99",
        image: "/Products/asus.png",
    },
    {
        id: 2,
        name: "Product 2",
        description: "This is a description of Product 2.",
        price: "$79.99",
        image: "/Products/apple.png",
    },
    {
        id: 3,
        name: "Product 3",
        description: "This is a description of Product 3.",
        price: "$99.99",
        image: "/Products/dell-7400.png",
    },
    {
        id: 4,
        name: "Product 4",
        description: "This is a description of Product 4.",
        price: "$129.99",
        image: "/Products/lenovo.png",
    },
    {
        id: 5,
        name: "Product 5",
        description: "This is a description of Product 5.",
        price: "$49.99",
        image: "/Products/apple2.png",
    },
    {
        id: 6,
        name: "Product 6",
        description: "This is a description of Product 6.",
        price: "$79.99",
        image: "/Products/dell-7400.png",
    },
    {
        id: 7,
        name: "Product 7",
        description: "This is a description of Product 7.",
        price: "$99.99",
        image: "/Products/asus.png",
    },
    {
        id: 8,
        name: "Product 8",
        description: "This is a description of Product 8.",
        price: "$129.99",
        image: "/Products/apple.png",
    },
];

function Products() {
    document.title = "Products";
    return (
        <div className="container mx-auto lg:my-8 md:my-0 sm:my-0 dark:black px-12 lg:px-32">
            <h1 className="text-3xl font-bold text-black text-center mb-8 dark:text-white">
                Our Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {demoProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 dark:text-white">
                                {product.name}
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                {product.description}
                            </p>
                            <p className="text-blue-600 dark:text-blue-400 font-bold">
                                {product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Light and Dark Mode */}
            <LightDarkMode />
        </div>
    );
}

export default Products;
