var connection = require('./connection.js');

var orm = {
    // selecting all burgers in db
    select: (table, cb) => {
        var query ="SELECT * FROM ?? ORDER BY id ASC";
        connection.query(query, table, function(error, data) {
            if(error) throw error;
            cb(data);
        });
    },
    // creating new burger
    insert: (table, col, val, cb) => {
        // INSERT INTO table_name(column_name)
        // VALUES ('the_value');
        var query = "INSERT INTO ??(??) VALUES(?)";
        connection.query(query, [table, col, val], function(error, data) {
            if(error) throw error;
            cb(data);
        });
    },
    // setting devoured to true
    update: (table, id, cb) => {
        // UPDATE table_name
        // SET column1 = value1, column2 = value2, ...
        // WHERE condition;
        var query = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(query, [table, id], function(error, data) {
            if(error) throw error;
            cb(data);
        });
    }
}

module.exports=orm;
