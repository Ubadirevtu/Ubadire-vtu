// controllers/airtimeController.js
// Handle airtime purchase requests

const purchaseAirtime = async (req, res) => {
  try {
    const { phone, amount, network } = req.body;
    
    // Validate input
    if (!phone || !amount || !network) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Process airtime purchase
    res.json({ 
      status: 'success', 
      message: 'Airtime purchase initiated',
      transaction_id: Math.random().toString(36).substr(2, 9)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { purchaseAirtime };