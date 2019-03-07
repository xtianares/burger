var orm = require('../config/orm.js');

var burger = {
    // grab all burgers
    all: (cb) => {
        orm.select('burger', function(res) {
            cb(res);
        });
    },
    // add/create burger
    create: (burgerName, cb) => {
        orm.insert('burger', 'burger_name', burgerName, function(res) {
            cb(res);
        });
    },
    // update a burger
    update: (id, cb) => {
        orm.update('burger', id, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;
