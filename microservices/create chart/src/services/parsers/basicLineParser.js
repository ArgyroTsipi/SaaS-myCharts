const validateData = require('../validate');
const {isNumber} = require("lodash");

const basicLineParser = async (chartUserData,chartConfig) => {

    //the parser combines the data sent from frontend and
    //the chart configuration
    chartConfig.title.text = chartUserData[2][0];
    chartConfig.subtitle.text = chartUserData[2][1];
    chartConfig.plotOptions.series.pointStart = chartUserData[2][2];
    chartConfig.xAxis.accessibility.rangeDescription = chartUserData[2][3];
    chartConfig.yAxis.title.text = chartUserData[2][4];
    let names = chartUserData[4];

    for (let col = 0; col < chartUserData[4].length; col++) {
        let func = { name: names[col], data: [] };

        for (let row = 5; row < chartUserData.length; row++) {
            if (chartUserData[row][col] === undefined ||
                chartUserData[row][col] === null)
                func.data.push(null);
            else
            {
                if (isNumber(chartUserData[row][col]))
                    func.data.push(chartUserData[row][col]);
                else
                    return {status:"error"};
            }

        }
        chartConfig.series.push(func);
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

module.exports= basicLineParser;