import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="navbar bg-blue-800 px-6 py-3 border-blue-900">
            <ul className="nav-items flex flex-row justify-between">
                <div className="flex flex-row items-center space-x-3 text-white text-base font-sans">
                    <div className="font-bold text-xl cursor-pointer mr-1">PLATED</div>
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">Orders</a></li>
                    <li><a href="">Ratings</a></li>
                    <li><a href="">Help</a></li>
                </div>
                <div className="flex space-x-1 items-center">
                    <Link to="/register">
                        <div className="hover:bg-slate-100 transition ease-in duration-300 px-3 p-2 cursor-pointer rounded hover:bg-opacity-20 text-white">Register</div>
                    </Link>
                    <Link to="/login">
                        <div className="hover:bg-slate-100 transition ease-in duration-300 px-3 p-2 cursor-pointer rounded hover:bg-opacity-20 text-white">Login</div>
                    </Link>
                </div>
            </ul>
        </div>
    );
}
 
export default Navbar;