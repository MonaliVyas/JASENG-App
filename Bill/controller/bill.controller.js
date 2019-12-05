//db insert bill
const insertBill = () => {
        const bill = new Bill({
            billno: 1,
            challanNo: 1,
            Price: 750
        });
    
        try{
            const result = await bill.save();
            console.log(result);
        }
       catch(ex){
           console.log(ex.message);
       }
}
    
//db update bill
const updateBillByID = (id) => {
    try{
        const result = await Bill.update({ _id: id},{
            $set: {
                // billno: 1,
                // challanNo: 1,
                // Price: 750 
            }        
            });
            console.log(result);
    }
    catch(ex){
        console.log(ex.message);
    }
}

//db delete bill
const deleteBillByID = (id) => {
    try{
        const result = Bill.deleteOne({_id: id});
        console.log(result);
    }
    catch(ex){
        console.log(ex.message);
    }
}

//db select bill
const selectBill = () => {
   const result = await Bill.find();
  // console.log(result);
   return result;
}

//db select bill by ID
const selectBillByID = (id) => {
    const result = await Bill.findById(id)
    return result;
}

exports.insertBill = insertBill;
exports.updateBillByID = updateBillByID;
exports.deleteBillByID = deleteBillByID;
exports.selectBill = selectBill;
exports.selectBillByID = selectBillByID;
