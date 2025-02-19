import "./App.css";
import 'flowbite';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">        
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
