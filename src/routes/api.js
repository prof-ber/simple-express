const express = require('express');
const router = express.Router();

// Endpoint GET
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Endpoint POST
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});

module.exports = router;