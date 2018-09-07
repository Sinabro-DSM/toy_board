const express = require('express');
const router = express.Router();
const ctrl = require('./auth.ctrl');

router.post('/signUp',ctrl.signUp);
router.post('/login',ctrl.login);

module.exports = router;