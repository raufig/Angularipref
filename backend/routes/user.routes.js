const { Router } = require('express');
const userCtrl = require('../controllers/user.controller');
const router = Router();
const  auth  = require("../middleware/auth");

const { User } = require("../model/user.model");
const { Preferencia } = require("../model/pref.model");
const { SubPrefe } = require("../model/pref.model");
const { PrefUser } = require("../model/prefU.model");


router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.post('/loginU', userCtrl.authUser);
router.get('/welcome', auth, userCtrl.firstLogInUser);
router.post('/welcome', auth, userCtrl.savePref );

/* router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUser);
router.put('/:id', userCtrl.editUser);
router.delete('/', userCtrl.deleteUser);
router.post('/loginU', userCtrl.authUser); */



module.exports = router; 