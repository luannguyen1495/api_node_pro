const conn = require('../config/database');

const account = {
    getAll: (callback) => {
        let sql = "SELECT * FROM users";
        conn.query(sql, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
                console.log(result);
            }
        });
    },

    register: (data, callback) => {
        let sql = "INSERT INTO users SET ?";
        conn.query(sql, data, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    },

    checkLogin: (data, callback) => {
        let sql = "SELECT * FROM users WHERE email = ? ";
        conn.query(sql, data, (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = account;