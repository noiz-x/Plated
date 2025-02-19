import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("accessToken");
    return token ? <Outlet /> : <Navigate to="/login" />;
    // flash message here: You're not autenticated yet / you must be authenticated to access that page
    // or you don't have permission to view that page / you can't access that page (sorry it has to be 4 ocd).
    // probably also add a mechanism to redirect or direct back to this exact attempted to open page
    // immediately after the user has been finally successfully authenticated or logged in - Query params.
};

export default PrivateRoute;