import "./App.css";
import 'flowbite';
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content bg-slate-200">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
