let orm = require('../config/orm.js');

let burger = {
    // grab all burgers
    all: (cb) => {
        orm.selectAll('burger', function(res) {
            cb(res);
        });
    },
    // add/create burger
    create: (burgerName, cb) => {
        orm.insertOne('burger', 'burger_name', burgerName, function(res) {
            cb(res);
        });
    },
    // update a burger
    update: (id, cb) => {
        orm.updateOne('burger', id, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;
