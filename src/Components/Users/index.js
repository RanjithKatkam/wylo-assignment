import { Link } from "react-router-dom";
import "./index.css";

export default function Users(data) {
    return (
        <div className="users-main-container">
            <div className="cards-container">
                {data.userData.map((user) => (
                    <div key={user.name} className="card">
                        <img src={user.photo} alt={user.name} className="profile-image" />
                        <h2>{user.name}</h2>
                        <p className="title">{user.role}</p>
                        <div className="about-me">
                            <h3>About Me</h3>
                            <p>{user.about}</p>
                        </div>
                        <Link to={`/user/${user.name}`}>
                            <button className="view-profile-btn">View Profile</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
