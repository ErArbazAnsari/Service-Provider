import { Outlet, Navigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { useAuth } from "../../store/auth";

function AdminLayout() {
    const { user, isLoading, isLoggedIn } = useAuth();
    // console.log(user);

    if (isLoggedIn) {
        if (isLoading) {
            return <div>Loading...</div>;
        }
        if (!user.isAdmin) {
            return <Navigate to="/" />;
        }
    } else {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <header>
                <AdminNavbar />
            </header>

            <main
                className="min-h-screen text-white"
            >
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
