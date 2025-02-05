import "./App.css";
import 'flowbite';
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App flex flex-col h-screen">
        <Navbar />
        <div className="content bg-slate-200 flex-grow">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
