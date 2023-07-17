const getConfigMongo = require("../getConfigMongo");
const validateData = require("../validate");

const networkParser = async (chartUserData,chartConfig) => {

    //the parser combines the data sent from frontend and
    //the chart configuration
    console.log(chartConfig);
    chartConfig.title.text = chartUserData[2][0];
    chartConfig.subtitle.text = chartUserData[2][1]

    for (let row = 5; row < chartUserData.length; row++) {
        if (chartUserData[row].length !== 2)
            return {status:"error"};

        chartConfig.series[0].data.push(chartUserData[row])
    }

    delete chartConfig._id;
    delete chartConfig.id;
    console.log(chartConfig);
    try {
        validateData(chartConfig)
    }catch(err){
        console.log(err.message);
        return {status:"error"};
    }

    //if the data the user provided are valid the final chart
    //configuration is sent to the frontend to display the chart
    return chartConfig;

};

module.exports= networkParser;