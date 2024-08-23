const express = require('express');
const axios = require('axios');
const app = express();

const apiKey = 'YOUR_API_KEY'; // Replace with your Ola API key

app.get('/getOlaRideOptions', async (req, res) => {
    try {
        const url = "https://devapi.olacabs.com/v1/products?pickup_lat=12.8953741&pickup_lng=77.5859018&drop_lat=12.9560643&drop_lng=77.6514801&service_type=p2p&category=auto";
        
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Ola API:', error);
        res.status(500).json({ error: 'Failed to fetch data from Ola API' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
