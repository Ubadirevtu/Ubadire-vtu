// controllers/dataController.js
// Handle data subscription requests

const purchaseData = async (req, res) => {
  try {
    const { phone, plan, network } = req.body;
    
    // Validate input
    if (!phone || !plan || !network) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Process data subscription
    res.json({ 
      status: 'success', 
      message: 'Data subscription initiated',
      transaction_id: Math.random().toString(36).substr(2, 9)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { purchaseData };