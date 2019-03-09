let express = require("express"),
    burger = require("../models/burger.js"),
    router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        res.render("index", { burgers: data });
    });
});

router.post("/create", function (req, res) {
    burger.create(req.body.burger_name, function (data) {
        res.redirect("/burgers");
    });
});

router.put("/update/:id", function (req, res) {
    burger.update(req.params.id, function (data) {
        res.redirect("/burgers");
    });
});

//Export router for server.js use
module.exports = router;
