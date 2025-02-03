import { useState, useEffect } from "react";
import axiosInstance from "../auth/axiosInstance";

const useFetchProtectedData = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(endpoint);
                setData(response.data);
            } catch (error) {
                setError("Failed to fetch data");
                console.error("Error fetching protected data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetchProtectedData;
