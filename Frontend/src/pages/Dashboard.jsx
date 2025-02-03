import useFetchProtectedData from "../hooks/useFetchProtectedData";
import Loader from "../components/Loader";

const Dashboard = () => {
    const { data, loading, error } = useFetchProtectedData("http://127.0.0.1:8000/api/auth/user/");

    return ( 
        <div>
            { loading && <Loader text="Please wait... We're setting up your dashboard." /> }
            { error && <p>{ error }</p> }
            { data && (
                <div className="dashboard">
                    <h1>Welcome, {data.username}!</h1>
                    <p>Your email address is: {data.email}</p>
                    <p>{ data.is_first_login && "Welcome New User"}</p>
                    <p>{ !data.is_first_login && "Welcome Back"}</p>
                </div>
            ) }
        </div>
    );
}
 
export default Dashboard;