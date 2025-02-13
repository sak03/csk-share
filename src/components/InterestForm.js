import { useState } from "react";
import axios from "axios";

export default function InterestForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/api/saveForm", formData);
        alert("Form submitted successfully!");
    };

    return (
        <form className="p-4 border rounded-lg w-80" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" className="border p-2 w-full mb-2" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" className="border p-2 w-full mb-2" onChange={handleChange} />
            <textarea name="message" placeholder="Message" className="border p-2 w-full mb-2" onChange={handleChange} />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
    );
}
