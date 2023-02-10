const user = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const generateToken = require('../helpers/generateToken');
const userController = {
    getAll: (req, res) => {
        user.getAll((err, data) => {
            if (err) {
                res.json(err);
            } else {
                res.status(200).json(data);
            }
        });
    },
    register: (req, res) => {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                req.body.password = hash;
                user.register(req.body, (err, data) => {
                    if (err) {
                        res.json(err);
                    } else {
                        res.status(200).json(data);
                    }
                });
            });
        });
    },
    login: (req, res) => {
        user.checkLogin(req.body.email, (err, data) => {
            if (err) {
                res.json(err);
            } else {
                if (data.length > 0) {
                    bcrypt.compare(req.body.password, data[0].password, (err, result) => {
                        if (err) {
                            res.json(err);
                        } else {
                            if (result) {  
                                // const token  = jwt.sign({userName:data[0].userName},process.env.TOKEN_SECRET,{
                                //     expiresIn:'1m'
                                // });
                                const token = generateToken({userName:data[0].userName});
                                // theem moi refresh_token vafo bang user voi user tuowng ung
                                res.json(token);
                            } else {
                                res.json({ result, message: "Failed" });
                            }
                        }
                    })
                }
            }
        })
    }
};

module.exports = userController;