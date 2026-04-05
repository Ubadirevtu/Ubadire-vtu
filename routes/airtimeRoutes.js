const express = require('express');
const router = express.Router();
router.post('/purchase', (req, res) => {
    const { phone, amount, network } = req.body;
    res.json({ message: 'Airtime purchase initiated', phone, amount, network });
});
router.get('/balance/:phone', (req, res) => {
    const phone = req.params.phone;
    res.json({ message: 'Airtime balance', phone });
});
module.exports = router;