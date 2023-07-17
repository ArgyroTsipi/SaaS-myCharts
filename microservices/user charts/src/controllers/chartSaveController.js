const saveChart = require('../services/saveChart');
const chartSaveController = async (req, res) => {

        const date = req.params.date;
        const jsonData = req.body; // JSON data sent from the frontend
        //save the data in the database
        const result = await saveChart(jsonData,date,req.user_id);
        if (result.status === 'ok')
                res.send(result);
        else{
                res.status(500).send({ error: 'An error occurred during saving data ' });
        }

}

module.exports = chartSaveController;