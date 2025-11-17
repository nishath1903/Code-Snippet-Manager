import axios from "axios";

const API_URL = "http://localhost:5000/api/snippets";

export const getSnippets = async (token) => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createSnippet = async (snippet, token) => {
  return axios.post(API_URL, snippet, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateSnippet = async (id, snippet, token) => {
  return axios.put(`${API_URL}/${id}`, snippet, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteSnippet = async (id, token) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
