const express = require('express');
const router = express.Router();
const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateUser} = require('../controllers/user');

//routes

router.get( "/", handleGetAllUsers);

router
    .route('/:id')
    .get (handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

router.post('/', handleCreateUser);

module.exports = router;