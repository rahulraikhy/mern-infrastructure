const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/addnote', notesCtrl.addNote);
router.get('/getnote', notesCtrl.getNote);

module.exports = router;