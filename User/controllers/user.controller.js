//db insert user
const insertUser = () => {
    const user = new User({
        UserId: 1,
        FirstName: 'Monali',
        LastName: 'Vyas',
        Username: 'monali.vyas'
    });

    const result = await user.save();
    console.log(result);
}

//db update user
const updateUserByID = () => {
    const result = await User.update({ _id: id}, {
        $set: {
            // UserId: 1,
            // FirstName: 'Monali',
            // LastName: 'Vyas',
            // Username: 'monali.vyas'
        }
    })
    console.log(result);
}

//db delete user
const deleteUserByID = (id) => {
    const result = User.deleteOne({_id: id});
}

//db select user
const selectUser = () => {
    const result = await User.find();
    return result;
}

//db select user by ID
const selectUserByID = (id) => {
    const result = await User.findById(id);
    return result;
}

