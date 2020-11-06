const { Router } = require('express');
const userCtrl = require('../controllers/user.controller');
const router = Router();


router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.post('/loginU', userCtrl.authUser);

/* router.get('/', userCtrl.getUsers);
router.post('/', userCtrl.createUser);
router.get('/:id', userCtrl.getUser);
router.put('/:id', userCtrl.editUser);
router.delete('/', userCtrl.deleteUser);
router.post('/loginU', userCtrl.authUser); */


module.exports = router; 