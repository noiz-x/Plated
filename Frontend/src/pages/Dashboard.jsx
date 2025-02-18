import useFetchProtectedData from "../hooks/useFetchProtectedData";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import SpeedDialComp from "../components/SpeedDial";

const Dashboard = () => {
    const apiDomain = process.env.REACT_APP_API_DOMAIN;

    const { data, loading, error } = useFetchProtectedData(`${apiDomain}api/auth/user/`);

    return ( 
        <div>
            { loading && <Loader text="Please wait... We're setting up your dashboard." /> }
            { error && <p>{ error }</p> }
            { data && (
                <div className="dashboard bg-slate-100 min-h-screen">
                    <div className="bg-slate-100 sticky top-0 lg:top-auto">
                        <Sidebar />
                        <div className="text-2xl ml-[4rem] font-bold py-4 top-0 lg:hidden">PLATED</div>
                    </div>
                    <div className="lg:ml-[20rem] h-full lg:px-0 px-4">
                        <div className="text-2xl font-semibold lg:pt-5 lg:pb-2 pb-1">Welcome {data.is_first_login ? "to Plated" : "back"}, {data.username}!</div>
                        <div>d doloribus eaque eos excepturi id a voluptatum natus ipsum voluptatem natus ipsum voluptatemnatus ipsum voluptatem et repellendus quo, provident recusandae ipsam quisquam?</div>
                        <SpeedDialComp />
                    </div>
                </div>
            ) }
        </div>
    );
}
 
export default Dashboard;