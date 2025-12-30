import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import SnippetCard from "../components/SnippetCard";

const Dashboard = () => {
  const [snippets, setSnippets] = useState([]);

  const fetchSnippets = async () => {
    try {
      const res = await axios.get("/snippets");
      setSnippets(res.data);
    } catch (err) {
      console.log("Failed to load snippets");
    }
  };

  useEffect(() => {
    fetchSnippets();
  }, []);

 return (
    <div className="page">
      <h2>Your Snippets</h2>

      <div className="snippet-grid">
        {/* Check if snippets exists and has items before mapping */}
        {snippets && snippets.length > 0 ? (
          snippets.map((s) => (
            <SnippetCard key={s._id} snippet={s} refresh={fetchSnippets} />
          ))
        ) : (
          <p>No snippets found. Click "Add New" to create one!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
