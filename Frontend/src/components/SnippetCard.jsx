import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosInstance";

const SnippetCard = ({ snippet, refresh }) => {
  const navigate = useNavigate();

  const deleteSnippet = async () => {
    const ok = window.confirm("Delete this snippet?");
    if (!ok) return;

    await axios.delete(`/snippets/${snippet?._id}`);
    refresh();
  };

  return (
    <div className="snippet-card">
      <h3>{snippet?.title}</h3>
      <p className="lang">{snippet?.language}</p>

      <pre className="code-preview">
        {snippet?.code?.slice(0, 150)}...
      </pre>

      <div className="card-actions">
        <button onClick={() => navigate(`/edit/${snippet?._id}`)}>
          Edit
        </button>
        <button onClick={deleteSnippet} className="danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SnippetCard;
