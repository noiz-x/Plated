import "./App.css";
import 'flowbite';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const isLoggedIn = !!localStorage.getItem("authToken"); 

  return (
    <Router>
      <div className="App flex flex-col h-screen">
        {isLoggedIn ? <Sidebar /> : <Navbar />}
        <div className="content bg-slate-200 flex-grow">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
