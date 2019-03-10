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

router.post("/api/create", function (req, res) {
    burger.create(req.body.burgerName, function (data) {
        res.status(200).end();
    });
});

router.put("/api/update/:id", function (req, res) {
    burger.update(req.params.id, function (data) {
        if(data.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});


//Export router for server.js use
module.exports = router;
