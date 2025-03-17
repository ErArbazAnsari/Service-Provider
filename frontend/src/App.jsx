import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layout/AdminLayout";
import AdminUsers from "./components/layout/AdminUsers";
import AdminContacts from "./components/layout/AdminContacts";
import AdminServices from "./components/layout/AdminServices";
import AdminDashboard from "./components/layout/AdminDashboard";
import Products from "./pages/Products";

function App() {
    return (
        <div className="bg-white dark:bg-black">
            <BrowserRouter>
                <Content />
            </BrowserRouter>
        </div>
    );
}

function Content() {
    const location = useLocation();

    // Determine if the current path is an admin route
    const isAdminRoute = location.pathname.startsWith("/admin");

    return (
        <>
            {!isAdminRoute && <Navbar />} {/* Conditionally render Navbar */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Error />} />
                <Route path="/products" element={<Products />} />
                <Route path="/logout" element={<Logout />} />
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="" element={<AdminDashboard />} />{" "}
                    {/* Render dashboard on "/admin" */}
                    <Route path="users" element={<AdminUsers />} />
                    <Route path="contacts" element={<AdminContacts />} />
                    <Route path="services" element={<AdminServices />} />
                </Route>
            </Routes>
            {!isAdminRoute && <Footer />} {/* Conditionally render Footer */}
        </>
    );
}

export default App;
