const multer = require("multer");
const directorio = "./public/";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, directorio);
  },
  filename: (req, file, cb) => {
    const filename =
      Date.now() + "-" + file.originalname.toLowerCase().split(" ").join("-");
    cb(null, filename);
  },
});
//Cargar Archivo
const uploadFile = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("only jpg, png & gif files"));
    }
  },
});
module.exports = uploadFile;
