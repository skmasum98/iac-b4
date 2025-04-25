const express = require("express");
const Article = require("../models/Article");
const router = express.Router();

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().populate("author", "username");
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new article (Admin only)
router.post("/", async (req, res) => {
  const { title, content, image, category, author } = req.body;

  try {
    const newArticle = new Article({ title, content, image, category, author });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
