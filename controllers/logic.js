const employees = require('../models/emsModel');

//all logics

//register logic

const employeeRegister = async (req, res) => {
    const file = req.file.filename;
    const { fname, lname, email, mobile, gender, location } = req.body;
    
//if any data is missing then we should inform the user..
    if(!fname || !lname || !email || !mobile || !gender || !location){
        res.status(404).json("all inputs are required");
    }

    try {
    
    const preEmployee = await employees.findOne({ email });

    if (preEmployee) {
        res.status(404).json("employee already present");
    } else {
        
            const newEmployee = new employees({
                fname,
                lname,
                email,
                mobile,
                gender,
                status :'active',
                profile: file,
                location
            });

            await newEmployee.save();

            res.status(200).json(newEmployee);
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json("logic error");
    }
}


//get all employees
getAllEmployees = async (req, res) => {
    try{
        const allEmployees = await employees.find();
        res.status(200).json(allEmployees);

    }catch(err){
        console.log(err);
        res.json(410).json("data not found");
    }
}

module.exports = { 
    employeeRegister , getAllEmployees
}