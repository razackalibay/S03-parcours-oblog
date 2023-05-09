//router.js
const { Router } = require("express");
const mainController = require("./controllers/mainController");


const router = Router();

// Toutes les requêtes vont traverser les middlewares un par un

router.get("/", mainController.renderHomePage);
router.get("/article/:id", mainController.renderArticlePage);


module.exports = router;