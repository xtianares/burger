// dependencies
let express = require("express"),
    exphbs = require("express-handlebars"),
    routes = require("./controllers/burgers_controller.js"),
    app = express();

// setting server port
let PORT = process.env.PORT || 8080;

// setup the express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
