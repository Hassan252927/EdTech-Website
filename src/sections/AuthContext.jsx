import React, { createContext, useState, useContext, useEffect } from "react";

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    try {
      const storedToken = localStorage.getItem("token");
      return storedToken ? storedToken : null;
    } catch (error) {
      console.error("Error retrieving token from localStorage:", error);
      return null;
    }
  });
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error retrieving user from localStorage:", error);
      return null;
    }
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = () => {
      if (token) {
        // If token exists, set authenticated to true
        setIsAuthenticated(true);
      } else {
        // If no token, user is not authenticated
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkAuthStatus();
  }, [token]);

  const login = (newToken, userDetails) => {
    // Store token and user details in localStorage
    try {
      localStorage.setItem("token", newToken);
      localStorage.setItem("user", JSON.stringify(userDetails));
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
    setToken(newToken);
    setUser(userDetails);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Clear token and user data from localStorage
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error clearing data from localStorage:", error);
    }
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
