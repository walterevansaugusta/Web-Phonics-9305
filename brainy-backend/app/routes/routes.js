const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user_controller');
const jwtHelper = require('../../config/jwtHelper');

router.post('/register', ctrlUser.register);

router.post('/authenticate', ctrlUser.authenticate);
router.put('/update', jwtHelper.verifyJwtToken, ctrlUser.update);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
module.exports = router;