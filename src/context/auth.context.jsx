import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const signup = async (userInfo) => {
    try {
      const { username, email, password } = userInfo;
      const response = await api.post(`/user/signup`, {
        username,
        email,
        password,
      });
      if (response.status === 201 || response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setAuthError(error.response.data.message);
    }
  };

  const login = async (userInfo) => {
    try {
      let response;
      const { loginInfo, password } = userInfo;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (emailRegex.test(loginInfo)) {
        response = await api.post("/user/login", {
          email: loginInfo,
          password,
        });
      } else {
        response = await api.post("/user/login", {
          username: loginInfo,
          password,
        });
      }

      if (response.status === 200 || response.status === 201) {
        storeToken(response.data.authToken);
        checkAuthentication();
        navigate("/dashboard");
      }
    } catch (error) {
      setAuthError(error.response.data.message);
    }
  };
  const checkAuthentication = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        const response = await api.post("/user/verify");
        setUser(response.data.user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    } catch (error) {
      if (error) {
        setAuthError(error.response.data.message);
        return;
      }
      setIsLoggedIn(false);
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.remove("authToken");
    checkAuthentication();
    navigate("/");
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        authError,
        login,
        signup,
        logout,
        checkAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
