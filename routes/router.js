
//set paths for each requests

const express = require('express');
const { employeeRegister } = require('../controllers/logic');
const upload = require('../multerconfig/storageConfig');

//create an object for Router class in express
const router = new express.Router();

//register employee - post
//file type data is there too so add upload middleware too
router.post('/employees/register',upload.single('user_profile'),employeeRegister);

//get all employees
router.get('/employees/getEmployees');


module.exports = router;