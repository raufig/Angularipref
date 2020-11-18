const { Router } = require('express');
const restCtrl = require('../controllers/rest.controller');
const router = Router();
const  authR  = require("../middleware/authR");
const uploadFile = require("../middleware/file");

router.get('/', restCtrl.getRests);
router.post('/', restCtrl.createRest);
router.post('/LoginR', restCtrl.authRest);
router.get('/welcome', authR, restCtrl.firstLogInRest);
router.post('/welcome', authR, restCtrl.savePref );
router.get("/test", authR, restCtrl.laMasPro); 
router.get("/MenuRestaurante", authR, restCtrl.getPlatos);
router.post('/crearPlato', uploadFile.single("img"), authR, restCtrl.createPlato);
router.get("/MenuRestaurante/:_id", authR, restCtrl.getPlato);
router.put("/MenuRestaurante/:_id", authR, restCtrl.editPlato);
router.delete("/MenuRestaurante/:_id", authR, restCtrl.deletePlato);
router.get("/edit-perfil", authR, restCtrl.getInfoRest);
router.put("/edit-perfil", authR, uploadFile.single("img"),  restCtrl.editInfoRest);
router.get("/ordenes", authR, restCtrl.getOrdenes);

module.exports = router; 