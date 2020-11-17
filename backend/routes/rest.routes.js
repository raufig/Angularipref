const { Router } = require('express');
const restCtrl = require('../controllers/rest.controller');
const router = Router();

router.get('/', restCtrl.getRests);
router.post('/', restCtrl.createRest);

router.post('/LoginR', restCtrl.authRest);

module.exports = router; 