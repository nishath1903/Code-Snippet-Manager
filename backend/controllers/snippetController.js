 import Snippet from "../models/Snippet.js";

export const createSnippet = async (req, res) => {
  try {
     const { title, language, code } = req.body;
     const newSnippet = await Snippet.create({
       title,
      language,
      code,
      createdBy: req.user // <-- FIX: Changed 'user' to 'createdBy'
      });

 res.status(201).json(newSnippet);
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
};

export const getSnippets = async (req, res) => {
try {
 const snippets = await Snippet.find({ createdBy: req.user }); // <-- FIX: Changed 'user' to 'createdBy'
 res.json(snippets);
 } catch (error) {
res.status(500).json({ message: error.message });
}
};

export const updateSnippet = async (req, res) => {
  try {
    const snippet = await Snippet.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user }, // <-- FIX: Changed 'user' to 'createdBy'
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
    await Snippet.findOneAndDelete({ _id: req.params.id, createdBy: req.user }); // <-- FIX: Changed 'user' to 'createdBy'
    res.json({ message: "Snippet deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};