const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Enable CORS for all routes
const cors = require('cors');
app.use(cors());

app.get('/api/bcv/euro', async (req, res) => {
  try {
    const response = await axios.get('https://www.bcv.org.ve/json/euro/last');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from BCV:', error);
    res.status(500).json({ error: 'Error getting data from BCV' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});