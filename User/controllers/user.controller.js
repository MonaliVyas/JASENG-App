const mongoose = require('mongoose');
const User = require('../models/user.model');
//db insert user
const insertUser = (request, response) => {
    const user = new User({
        UserId: 1,
        FirstName: 'Monali',
        LastName: 'Vyas',
        Username: 'monali.vyas'
    });

    user.save().then(result => {
        response.status(200).send({
            message: "Record inserted successfully"
        })
    }).catch(error => {
        response.status(500).send({
            message: error.message || "some error occured while inserting the record."
        })
    })
}

//db update user
const updateUserByID = (request, response) => {
    User.update({ _id: request.params.userId}, {
        $set: {
            UserId: 2,
            FirstName: 'Mona',
            LastName: 'Vyas',
            Username: 'mona.vyas'
        }
    }).then(result => {
        response.status(200).send({
            message: "Record updated successfully."
        })
    }).catch(error => {
        response.status(500).send({
            message: error.message || "some error occured while inserting the record."
        })
    });
}

//db delete user
const deleteUserByID = (request, response) => {
    User.deleteOne({_id: request.params.userId}).then(result => {
        response.status(200).send({
            message: "Record deleted successfully"
        })
    }).catch(error => {
        response.status(500).send({
            message: error.message || "some error occured while deleting the record."
        })
    });
}

//db select user
const selectUser = (request, response) => {
    User.find().then(users => {
        if (!users) {
            response.status(404).send({
                message: "No data found "
            });
            retrun;
        }
        response.status(200).send(users);
    }).catch(error => {
        response.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        })
    });
}

//db select user by ID
const selectUserByID = (request, response) => {
    User.findById(request.params.userId).then(user => {
        if (!user) {
            response.status(404).send({
                message: "No data found "
            });
            retrun;
        }
        response.status(200).send(user);
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Some error occurred while creating the Note."
        })
    });
}

exports.insertUser = insertUser;
exports.selectUser = selectUser;
exports.updateUserByID = updateUserByID;
exports.deleteUserByID = deleteUserByID;
exports.selectUserByID = selectUserByID;
