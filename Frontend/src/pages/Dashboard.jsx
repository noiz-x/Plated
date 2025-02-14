import useFetchProtectedData from "../hooks/useFetchProtectedData";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    const apiDomain = process.env.REACT_APP_API_DOMAIN;

    const { data, loading, error } = useFetchProtectedData(`${apiDomain}api/auth/user/`);

    return ( 
        <div>
            { loading && <Loader text="Please wait... We're setting up your dashboard." /> }
            { error && <p>{ error }</p> }
            { data && (
                <div className="dashboard flex">
                    <Sidebar />
                    <div className="w-full bg-slate-100">
                        <div className="text-2xl font-semibold p-5">Welcome {data.is_first_login ? "to Plated" : "back"}, {data.username}!</div>
                    </div>
                </div>
            ) }
        </div>
    );
}
 
export default Dashboard;