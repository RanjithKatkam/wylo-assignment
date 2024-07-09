import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

export default function AddUser() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        about: "",
        role: "",
        dob: "",
        location: "",
        skills: "",
        country: "",
        state: "",
        city: "",
        photo: "https://randomuser.me/api/portraits/men/19.jpg",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem("userdata"));
        const newData = [formData, ...data];
        localStorage.setItem("userdata", JSON.stringify(newData));
        navigate("/");
    };

    return (
        <div className="app">
            <Navbar />
            <div className="add-user-container">
                <h1>Add New User</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <label for="name">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    <label for="email">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label for="number">Number</label>
                    <input type="text" name="number" value={formData.number} onChange={handleChange} required />
                    <label for="dob">Date of Birth</label>
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
                    <label for="country">Country</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                    <label for="state">State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} required />
                    <label for="city">City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                    <label for="role">Role</label>
                    <input type="text" name="role" value={formData.role} onChange={handleChange} required />
                    <label for="about">About</label>
                    <textarea name="about" value={formData.about} onChange={handleChange} required></textarea>
                    <label for="location">Location</label>
                    <input type="text" name="location" value={formData.location} onChange={handleChange} required />
                    <label for="skills">Skills</label>
                    <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
                    <label for="photo" className="margin">
                        Image<span>(Automatically selected based on gender)</span>
                    </label>
                    <select name="photo" onChange={handleChange}>
                        <option value="https://randomuser.me/api/portraits/men/19.jpg">Male</option>
                        <option value="https://randomuser.me/api/portraits/women/20.jpg">Female</option>
                    </select>
                    <button type="submit">Add User</button>
                </form>
            </div>
        </div>
    );
}
