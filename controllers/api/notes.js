const jwt = require('jsonwebtoken');
const Note = require('../../models/note');

async function addNote(req, res) {
    try {
        const newNote = await Note.create(req.body);
        res.json(newNote);
    } catch {
        { console.error('error') }
    }
}

async function getNote(req, res) {
    try {
        const getNote = await Note.find({ user: req.user._id }).exec()
        res.json(getNote);
    } catch {
        (console.error('error'));
    }
}

module.exports = {
    addNote,
    getNote
};