import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
    return (
        <div className="header">
            <Link className="title" to="/">
                <h1>UZERS</h1>
            </Link>
            <img src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1702493738/willoy-purple-user-icon_dd33u5.png" alt="profile" />
            <Link className="a" to="/new-user">
                <button className="add-user-button">Add New User</button>
            </Link>
        </div>
    );
}

export default Navbar;
