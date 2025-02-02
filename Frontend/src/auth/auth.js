import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/auth/";

export const login = async (uname_email, password) => {
    const response = await axios.post(`${API_URL}login/`, { username:uname_email, password });

    if (response.data.access && response.data.refresh) {
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("refreshToken", response.data.refresh);
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

export const getToken = () => localStorage.getItem("accessToken");

export const refreshToken = async () => {
    try {
        const refresh = localStorage.getItem("refreshToken");
        if (!refresh) throw new Error("No refresh token available");

        const response = await axios.post(`${API_URL}token/refresh/`, { refresh });
        
        localStorage.setItem("accessToken", response.data.access);
        return response.data.access;
    } catch (error) {
        console.error("Refresh token expired", error);
        logout();
        return null;
    }
};
