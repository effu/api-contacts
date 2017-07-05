const express  = require('express');
const router   = express.Router();

// read all / index
router.get('/contacts', function(req, res) {
    res.json('Contacts - show all');
});

// read / view / show
router.get('/contacts/:id', function(req, res) {
    res.json('Contacts - view contact matching :id');
});

// create contact
router.post('/contacts', function(req, res) {
    res.json('Contacts - create contact');
});

// update contact
router.put('/contacts/:id', function(req, res) {
    res.json('Contacts - update contact matching :id');
});

// delete / destroy contact
router.delete('/contacts/:id', function(req, res) {
    res.json('Contacts - delete contact matching :id');
});

module.exports = router;
