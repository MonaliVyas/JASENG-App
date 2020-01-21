const Company = require('../model/company.model');
const mongoose = require('mongoose');


//db insert company
const insertCompany = (request, response) => {
    const company = new Company({
        name: 'KHS',
        code: '123',
        email: 'kvyas@khs.com',
        phone: 1234567890,
        address: 'Motera',
        GSTNo: '123456789asdrfgty'
    });
    
    company.save().then(result => {
        response.status(200).send({
            message: "Record inserted successfully"
        })
    }).catch(error => {
        response.status(500).send({
            message: error.message || "some error occured while inserting the record."
        })
    })
}

//db update company
const updateCompanyByID = (request, response) => {
    Company.update({ _id: request.params.companyId}, {
        $set: {
            name: 'Inspiron',
            code: '111',
            email: 'abc@insp.com',
            phone: 1234567890,
            address: 'xxx',
            GSTNo: '223456789asdrfgty'
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

//db delete company
const deleteCompanyByID = (request, response) => {
    Company.deleteOne({_id: request.params.companyId}).then(result => {
        response.status(200).send({
            message: "Record deleted successfully"
        })
    }).catch(error => {
        response.status(500).send({
            message: error.message || "some error occured while deleting the record."
        })
    });
}

//db select company
const selectCompany = (request, response) => {
    Company.find().then(companys => {
        if (!companys) {
            response.status(404).send({
                message: "No data found "
            });
            retrun;
        }
        response.status(200).send(companys);
    }).catch(error => {
        response.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        })
    });
}

//db select company by ID
const selectCompanyByID = (request, response) => {
    Company.findById(request.params.companyId).then(company => {
        if (!company) {
            response.status(404).send({
                message: "No data found "
            });
            retrun;
        }
        response.status(200).send(company);
    }).catch(error => {
        response.status(500).send({
            message: error.message || "Some error occurred while creating the Note."
        })
    });
}


exports.selectCompany = selectCompany;
exports.insertCompany = insertCompany;
exports.selectCompanyByID = selectCompanyByID;
exports.updateCompanyByID = updateCompanyByID;
exports.deleteCompanyByID = deleteCompanyByID;