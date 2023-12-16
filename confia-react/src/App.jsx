import Signup from "./pages/Signup";
import Setup from "./pages/Setup";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/" element={<Setup />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </Router>
    );
}
