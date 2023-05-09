// mainController.js
const articles = require("../data/articles.json");

const mainController = {
  renderHomePage: (req, res) => {
    res.render("home", {
      articles
    });
  },

  renderArticlePage: (req, res, next) => {
    const articleId = parseInt(req.params.id);

    const article = articles.find((article) => article.id === articleId);

    if (!article) {
      return res.status(404).render("404");
    }

    res.render("article", { article });
  },








};


module.exports = mainController;