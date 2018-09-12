const express = require('express');
const router = express.Router();
const ctrl = require('./post.ctrl');
const isLoggedIn = require('../../util/isLoggedIn');

router.get('/',ctrl.read);
router.post('/',isLoggedIn,ctrl.write);
router.put('/',isLoggedIn,ctrl.updatePost);
router.delete('/',isLoggedIn,ctrl.deletePost);

module.exports = router;