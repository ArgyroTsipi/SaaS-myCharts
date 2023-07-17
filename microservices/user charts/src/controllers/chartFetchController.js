const fetchChart = require('../services/fetchChart');
const chartFetchController = async (req, res) => {

    try {
        const result = await fetchChart(req.user_id);
        // Send the charts back to the frontend
        res.send(result);
    } catch (error) {
        // Handle any errors that occur during processing
        console.error(error);
        res.status(500).send({ error: 'An error occurred while fetching the chart' });
    }

}

module.exports = chartFetchController;