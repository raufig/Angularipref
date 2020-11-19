const { Router } = require('express');
const userCtrl = require('../controllers/user.controller');
const router = Router();
const  authU  = require("../middleware/authU");
const uploadFile = require("../middleware/file");



router.post('/', userCtrl.createUser);
router.post('/loginU', userCtrl.authUser);
router.get('/welcome', /* authU, */ userCtrl.firstLogInUser);
router.post('/welcome', authU, userCtrl.savePref );
router.get('/home', authU, userCtrl.getRest);
router.get("/menu-resta", authU, userCtrl.getMenuRest);
router.post("/menu-resta", authU, userCtrl.createOrder);
router.get("/edit-perfil", /* authU, */ userCtrl.getInfoUser);
router.put("/edit-perfil", authU, uploadFile.single("img"),  userCtrl.editInfoUser);





module.exports = router; 