let mysql = require("mysql"),
    connection;

// from MySQLHerokuDeploymentProcess.pdf
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root", // your db username
        password: "root", // your db password
        database: "burgers_db" // you db name
    });
};

// connecting to mysql
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
