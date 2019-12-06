//db insert item
const insertItem = () => {
    const item = new Item({
        ItemNo: 1,
        Name: 'Pipe',
        DrawingNo: '123x',
        PartCode: 'xxx',
        Material: 'Steel',
        Price: 50
    });
    const result = await item.save();
    console.log(result);
}

//db update item
const updateItemByID = () => {
    const result = await Item.update({ _id: id}, {
        $set: {
            // ItemNo: 1,
            // Name: 'Pipe',
            // DrawingNo: '123x',
            // PartCode: 'xxx',
            // Material: 'Steel',
            // Price: 50
        }
    })
console.log(result);
}

//db delete item
const deleteItemByID = (id) => {
    const result = Item.deleteOne({_id: id});
}

//db select item
const selectItem = () => {
    const result = await Item.find();
    return result;
}

//db select item by ID
const selectItemByID = (id) => {
    const result = await Item.findById(id);
    return result;
}
