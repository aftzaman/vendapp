var express = require('express'),    
    router = express.Router(),
    bcrypt = require('bcrypt'),
    salt = bcrypt.genSaltSync(10);

var db = require('../db/index.js');

module.exports = function (router) {
    // register 
    router.post('/register', function (request, response) {
        db.User.findOne({'email': request.body.email}, function (err, exist) {
            if(err) {
                response.json({
                    error: true,
                    errorCode: 'UNKNOWN_ERROR',
                    stack: err
                });
            }
            else if(exist) {
                response.json({
                    error: true,
                    errorCode: 'Already exist'
                });
            }
            else if(!exist) {
                var hash = bcrypt.hashSync(request.body.password, salt);
                var user = new db.User();
                user.email = request.body.email;
                user.name = request.body.name;
                user.mobile = request.body.mobile;
                user.password = hash;

                user.save(function (err, saved) {
                    if(err) {
                        response.json({
                            error: true,
                            errorCode: 'UNKNOWN_ERROR',
                            stack: err
                        });
                    }
                    else if(!saved) {
                        response.json({
                            error: true,
                            errorCode: 'Not able to save'
                        });
                    }
                    else if(saved) {
                        response.json({
                            success: true,
                            user: saved
                        });
                    }
                })
            }
        });
    });

    //login
    router.post('/login', function(request, response) {
        db.User.findOne({'email': request.body.email}, function (err, exist) {
            if(err) {
                response.json({
                    error: true,
                    errorCode: 'UNKNOWN_ERROR',
                    stack: err
                });
            }
            else if(!exist) {
                response.json({
                    error: true,
                    errorCode: 'No user exist'
                });
            }
            else if(exist) {
                if(bcrypt.compareSync(request.body.password, exist.password)) {
                    response.json({
                        success: true,
                        user: exist
                    });
                }
                else {
                    response.json({
                        error: true,
                        errorCode: 'Invalid password'
                    });
                }
            }
        })
    });
}