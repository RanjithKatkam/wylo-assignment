import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import UserDetails from "./Components/UserDetails";
import AddUser from "./Components/AddUser";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/user/:name" element={<UserDetails />} />
                <Route path="/new-user" element={<AddUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
