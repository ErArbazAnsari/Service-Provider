import { createContext, useContext, useEffect, useState } from "react";

// Create an AuthContext to share authentication state across the application
export const AuthContext = createContext();

// AuthProvider component that wraps the application and provides auth context to its children
export const AuthProvider = ({ children }) => {
    // Define the base URI for API requests from environment variables
    const URI = import.meta.env.VITE_APP_URI;

    // State to store the JWT token, retrieved from localStorage or initialized as an empty string
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    // State to store the authenticated user's information
    const [user, setUser] = useState("");

    // State to track loading status during user authentication
    const [isLoading, setIsLoading] = useState(true);

    // Prepare the Authorization header value using the JWT token
    const authorizationToken = `Bearer ${token}`;

    /**
     * Function to store the JWT token in both state and localStorage
     * @param {string} token - The JWT token to be stored
     */
    const storeTokenInLS = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
    };

    /**
     * Boolean flag indicating whether the user is logged in
     * Returns true if a token is present, otherwise false
     */
    const isLoggedIn = !!token;

    /**
     * Function to log the user out by clearing the token from state and localStorage
     */
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    /**
     * Function to authenticate the currently logged-in user via a JWT token
     * Fetches user data from the API and updates the user state
     */
    const userAuthentication = async () => {
        if (!token) return; // If no token is present, do not proceed with the request

        try {
            setIsLoading(true); // Set loading state to true before making the request
            const response = await fetch(`${URI}/myapi/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data.userData); // Store the fetched user data in state
            } else {
                console.error(
                    "Failed to fetch user data:",
                    response.statusText
                );
            }
        } catch (error) {
            console.error("Error in userAuthentication:", error);
        } finally {
            setIsLoading(false); // Ensure loading state is false after the request
        }
    };

    // useEffect hook to re-authenticate the user whenever the token changes
    useEffect(() => {
        userAuthentication();
    }, [token]);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                storeTokenInLS,
                LogoutUser,
                user,
                authorizationToken,
                isLoading,
                URI,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Custom hook to use the AuthContext
 * Ensures the hook is used within an AuthProvider
 * @returns {object} Auth context value
 */
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);

    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
