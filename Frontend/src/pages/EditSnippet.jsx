import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

const EditSnippet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    language: "",
    code: "",
    description: ""
  });

  const fetchSnippet = async () => {
    try {
      const res = await axios.get(`/snippets/${id}`);
      setForm(res.data);
    } catch (err) {
      alert("Error loading snippet");
    }
  };

 useEffect(() => {
    if (id) {
      fetchSnippet();
    }
  }, [id]); // Adding [id] tells React: "If the ID changes or appears, fetch the data!"
  
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/snippets/${id}`, form);
      navigate("/dashboard");
    } catch (err) {
      alert("Failed to update snippet");
    }
  };

  return (
    <div className="page">
      <h2>Edit Snippet</h2>

      <form className="snippet-form" onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="language"
          value={form.language}
          onChange={handleChange}
          required
        />

        <textarea
          name="code"
          rows="10"
          value={form.code}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          rows="3"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Update Snippet</button>
      </form>
    </div>
  );
};

export default EditSnippet;
