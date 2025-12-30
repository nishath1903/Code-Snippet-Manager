import Snippet from "../models/Snippet.js";

export const createSnippet = async (req, res) => {
  try {
    const { title, language, code } = req.body;
    const newSnippet = await Snippet.create({
      title,
      language,
      code,
      createdBy: req.user
    });
    res.status(201).json(newSnippet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.find({ createdBy: req.user });
    res.json(snippets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- NEW FUNCTION START ---
export const getSnippetById = async (req, res) => {
  try {
    // We find by ID AND ensure it belongs to the logged-in user for security
    const snippet = await Snippet.findOne({ _id: req.params.id, createdBy: req.user });
    
    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }
    res.json(snippet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// --- NEW FUNCTION END ---

export const updateSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user },
      req.body,
      { new: true }
    );
    res.json(snippet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSnippet = async (req, res) => {
  try {
    await Snippet.findOneAndDelete({ _id: req.params.id, createdBy: req.user });
    res.json({ message: "Snippet deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};