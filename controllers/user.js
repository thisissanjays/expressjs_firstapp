const User = require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}
async function handleGetUserById(req, res) {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    const userid = req.params.id;
        const body =req.body;
        const updated_user= await User.findByIDAndUpdate(userid,{
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            mobile_model: body.mobile_model
        });
        if (!updated_user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json(updated_user);
}
async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ message: 'User deleted successfully' });
}

async function handleCreateUser(req, res) {
    const body =req.body;
    if (!body.first_name || !body.last_name || !body.email || !body.gender || !body.mobile_model){
        return res.status(400).json({ message: 'All fields are required' });
    }
    const newuser= await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        mobile_model: body.mobile_model
    });
    return res.status(201).json(newuser);
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
    // Additional controller functions can be added here
}