// import multer 
const multer = require('multer');

//set storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./uploads');
    },
    filename: (req, file, cb) => {
        cb(null,`image-${Date.now()}-${file.originalname}`);
    }
});

//file filtering
const fileFilter = (req, file, cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
        cb(null, true);
    }else{
        cb(null, false);
        return cb(new Error('only accepts png/jpg/jpeg format files'));
    }
}

//upload
const upload = multer({
    storage : storage,
    fileFilter : fileFilter
});

module.exports = upload;