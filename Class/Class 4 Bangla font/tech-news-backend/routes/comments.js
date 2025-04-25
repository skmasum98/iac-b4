const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// Get comments for an article
router.get("/:articleId", async (req, res) => {
  try {
    const comments = await Comment.find({ article: req.params.articleId }).populate("user", "username");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post a comment
router.post("/", async (req, res) => {
  const { content, user, article } = req.body;

  try {
    const newComment = new Comment({ content, user, article });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
