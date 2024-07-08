import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./index.css";
import { useParams } from "react-router-dom";

export default function UserDetails(params) {
    const [userData, setUserData] = useState([]);
    const [editBtn, setEditBtn] = useState(false);
    const [formData, setFormData] = useState({
        role: "",
        about: "",
        email: "",
        dob: "",
        number: "",
        location: "",
        skills: "",
    });
    const { role, about, email, dob, number, location, skills } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const userName = useParams();

    const onClickEditProfile = () => {
        setEditBtn(!editBtn);
    };

    const onClickSaveBtn = () => {
        const data = JSON.parse(localStorage.getItem("userdata"));
        const updatedUserData = {
            ...userData,
            role: formData.role,
            about: formData.about,
            email: formData.email,
            dob: formData.dob,
            number: formData.number,
            location: formData.location,
            skills: formData.skills,
        };

        const updatedData = data.map((item) => {
            if (item.name === userName.name) {
                return updatedUserData;
            }
            return item;
        });

        localStorage.setItem("userdata", JSON.stringify(updatedData));

        setUserData(updatedUserData);

        setEditBtn(false);
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userdata"));
        const user = data.filter((item) => item.name === userName.name);
        setUserData(user[0]);
        setFormData({
            role: user[0].role,
            about: user[0].about,
            email: user[0].email,
            dob: user[0].dob,
            number: user[0].number,
            location: user[0].location,
            skills: user[0].skills,
        });
    }, [userName]);

    return (
        <div className="app">
            <Navbar />
            <div className="user-details-container">
                <div className="details">
                    <div className="profile-pic-container">
                        <img src={userData.photo} alt={userData.name} />
                        <div className="profile-inner">
                            <h1>{userData.name}</h1>
                            {editBtn ? (
                                <>
                                    <label for="role">Role</label>
                                    <input name="role" onChange={handleChange} value={role} type="text" defaultValue={userData.role} />
                                    <label for="about">About</label>
                                    <input name="about" onChange={handleChange} value={about} type="text" defaultValue={userData.about} />
                                </>
                            ) : (
                                <>
                                    <h2>{userData.role}</h2>
                                    <h3>{userData.about}</h3>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="profile-div">
                        <div className="inner1">
                            <p>Name</p>
                            <h3>{userData.name}</h3>
                        </div>
                        <div className="inner1">
                            <p>Email</p>
                            {editBtn ? (
                                <input
                                    className="input"
                                    onChange={handleChange}
                                    value={email}
                                    name="email"
                                    type="email"
                                    defaultValue={userData.email}
                                />
                            ) : (
                                <h3>{userData.email}</h3>
                            )}
                        </div>
                    </div>
                    <div className="profile-div">
                        <div className="inner1">
                            <p>DOB</p>
                            {editBtn ? (
                                <input
                                    className="input"
                                    onChange={handleChange}
                                    value={dob}
                                    name="dob"
                                    type="date"
                                    defaultValue={userData.dob}
                                />
                            ) : (
                                <h3>{userData.dob}</h3>
                            )}
                        </div>
                        <div className="inner1">
                            <p>Mobile</p>
                            {editBtn ? (
                                <input
                                    className="input"
                                    value={number}
                                    name="number"
                                    type="number"
                                    maxLength={10}
                                    onChange={handleChange}
                                    defaultValue={userData.number}
                                />
                            ) : (
                                <h3>{userData.number}</h3>
                            )}
                        </div>
                    </div>
                    <div className="inner1 div1">
                        <p>Location</p>
                        {editBtn ? (
                            <input
                                className="input"
                                onChange={handleChange}
                                value={location}
                                name="location"
                                type="text"
                                defaultValue={userData.location}
                            />
                        ) : (
                            <h3>{userData.location}</h3>
                        )}
                    </div>
                    <div className="inner1 div1">
                        <p>Skills</p>
                        {editBtn ? (
                            <input
                                className="input"
                                onChange={handleChange}
                                value={skills}
                                name="skills"
                                type="text"
                                defaultValue={userData.skills}
                            />
                        ) : (
                            <h3>{userData.skills}</h3>
                        )}
                    </div>
                    {editBtn ? (
                        <button onClick={onClickSaveBtn} className="edit-btn save-btn">
                            Save
                        </button>
                    ) : (
                        <button onClick={onClickEditProfile} className="edit-btn">
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
