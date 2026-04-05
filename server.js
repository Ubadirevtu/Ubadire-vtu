'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Basic API routes
app.post('/api/airtime', (req, res) => {
    // Logic for airtime payments
    res.send('Airtime payment processed');
});

app.post('/api/data', (req, res) => {
    // Logic for data payments
    res.send('Data payment processed');
});

app.post('/api/bill-payments', (req, res) => {
    // Logic for bill payments
    res.send('Bill payment processed');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});