import "./App.css";
import 'flowbite';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";  
// there's still a bug with this Sidebar
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const isLoggedIn = !!localStorage.getItem("authToken"); 

  return (
    <Router>
      <div className={`App h-screen ${isLoggedIn ? "flex" : "flex flex-col"}`}>
        {isLoggedIn ? <Sidebar /> : <Navbar />}

        <div className={`content bg-slate-200 flex-grow ${isLoggedIn ? "ml-[250px]" : ""}`}>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
