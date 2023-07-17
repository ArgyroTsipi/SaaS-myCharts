const createChart = require('../services/createChart');


const createChartController = async (req, res) => {

        try {
                const jsonData = req.body; // JSON data for the chart sent from the frontend
                console.log(jsonData);
                const chartType = jsonData[2][jsonData[2].length-1];  //learns chart type(i.e basic line)
                const result = await createChart(jsonData,chartType); //creates the final chart configuration
                // Send a response back to the frontend
                if (result.status === "error")
                        res.status(500).send({error:"Wrong data"}); //the data sent from frontend were invalid
                else
                        res.send(result);
        } catch (error) {
                // Handle any errors that occur during processing
                console.error(error);
                res.status(500).send({ error: 'An error occurred during data processing' });
        }

}

module.exports = createChartController;