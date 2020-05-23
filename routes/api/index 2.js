const router = require("express").Router();
const booksRoutes = require("./books.js");

//  routes
router.use("/books", booksRoutes);

module.exports = router;
