
//db insert challan
const insertChallan = () => {
    const challan = new Challan({
        ChallanNo: 1,
        CompanyCode: '123',
        Date: Date.now(),
        Item: 'Number',
        Qty: 3
    });
    const result = await challan.save();
    console.log(result);
}

//db update challan
const updateChallanByID = (id) => {
    const result = await Challan.update({ _id: id}, {
        $set: {
            // ChallanNo: 1,
            // CompanyCode: '123',
            // Date: Date.now(),
            // Item: 'Number',
            // Qty: 3
        }
    });
    console.log(result);
}

//db delete challan
const deleteChallanByID = (id) => {
    const result = Challan.deleteOne(id);
}

//db select challan
const selectChallan = () => {
 const result = await Challan.find();
 return result;
}

//db select challan by ID
const selectChallanByID = (id) => {
    const result = await Challan.findById(id);
    return result;
}

