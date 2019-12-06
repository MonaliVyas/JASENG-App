//db insert company
const insertCompany = () => {
    const company = new Company({
        name: 'KHS',
        code: '123',
        email: 'kvyas@khs.com',
        phone: 1234567890,
        address: 'Motera',
        GSTNo: '123456789asdrfgty'
    });
    const result = await company.save();
    console.log(result);
}

//db update company
const updateCompanyByID = () => {
    const result = await Company.update({ _id: id}, {
        $set: {
            // name: 'KHS',
            // code: '123',
            // email: 'kvyas@khs.com',
            // phone: 1234567890,
            // address: 'Motera',
            // GSTNo: '123456789asdrfgty'
        }
    })
    console.log(result);
}

//db delete company
const deleteCompanyByID = (id) => {
    const result = await Company.deleteOne(id);
}

//db select company
const selectCompany = () => {
    const result = await Company.find();
    return result;
}

//db select company by ID
async function selectCompanyByID(id){
    const result = await Company.findById(id);
    return result;
}


//insertCompany()