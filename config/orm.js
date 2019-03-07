let connection = require('./connection.js');

let orm = {
    // selecting all burgers in db
    select: (table, cb) => {
        let query ="SELECT * FROM ?? ORDER BY id ASC";
        connection.query(query, table, function(error, data) {
            if(error) throw error;
            cb(data);
        });
    },
    // creating new burger
    insert: (table, col, val, cb) => {
        // INSERT INTO table_name(column_name)
        // VALUES ('the_value');
        let query = "INSERT INTO ??(??) VALUES(?)";
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
        let query = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(query, [table, id], function(error, data) {
            if(error) throw error;
            cb(data);
        });
    }
}

module.exports=orm;
