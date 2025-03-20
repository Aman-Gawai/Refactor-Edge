import multer from "multer";

const upload = multer({dest:"uploads/"}) //this upload has all the images

export default upload;