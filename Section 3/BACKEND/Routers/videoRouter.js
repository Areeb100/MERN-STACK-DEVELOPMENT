// to process user requests only
const express = require('express');
const router = express.Router();


router.get('/add', (req, res) => {
     res.send('Response from video');
})

module.exports = router;