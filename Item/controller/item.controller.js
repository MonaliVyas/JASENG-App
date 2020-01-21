const mongoose = require('mongoose');
const Item = require('../model/item.model');
//db insert item
const insertItem = (request, response) => {
    const item = new Item({
        ItemNo: 1,
        Name: 'Pipe',
        DrawingNo: '123x',
        PartCode: 'xxx',
        Material: 'Steel',
        Price: 50
    });
    item.save().then(item => {
            response.status(200).send({
                    message: "Record inserted successfully."
            });
    }).catch(error => {
            response.status(500).send({
                message: error.message || "some error occured while inserting the record."
            });
    })
}

//db update item
const updateItemByID = (request, response) => {
    Item.update({ _id: request.params.itemId}, {
        $set: {
            ItemNo: 2,
            Name: 'plate',
            DrawingNo: '120u',
            PartCode: 'xxx',
            Material: 'Steel',
            Price: 150
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

//db delete item
const deleteItemByID = (request, response) => {
    Item.deleteOne({_id: request.params.itemId}).then(result => {
        response.status(200).send({
            message: "Record deleted successfully"
        })
    }).catch(error => {
        response.status(500).send({
            message: error.message || "some error occured while deleting the record."
        })
    });
}

//db select item
const selectItem = (request, response) => {
    Item.find().then(items => {
        if (!items) {
            response.status(404).send({
                message: "No data found "
            });
            retrun;
        }
        response.status(200).send(items);
    }).catch(error => {
        response.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        })
    });
}

//db select item by ID
const selectItemByID = (request, response) => {
    Item.findById(request.params.itemId).then(item => {
        if (!item) {
            response.status(404).send({
                message: "No data found "
            });
            retrun;
        }
        response.status(200).send(item);
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Some error occurred while creating the Note."
        })
    });
}

exports.insertItem = insertItem;
exports.selectItem = selectItem;
exports.updateItemByID = updateItemByID;
exports.deleteItemByID = deleteItemByID;
exports.selectItemByID = selectItemByID;