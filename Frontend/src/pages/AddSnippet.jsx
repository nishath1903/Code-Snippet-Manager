import React, { useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const AddSnippet = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    language: "",
    code: "",
    description: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/snippets", form);
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to add snippet");
    }
  };

  return (
    <div className="page">
      <h2>Add Snippet</h2>

      <form className="snippet-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="language"
          placeholder="Language (JS, Python, etc.)"
          value={form.language}
          onChange={handleChange}
          required
        />

        <textarea
          name="code"
          rows="10"
          placeholder="Enter your code here..."
          value={form.code}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          rows="3"
          placeholder="Description (optional)"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Save Snippet</button>
      </form>
    </div>
  );
};

export default AddSnippet;
