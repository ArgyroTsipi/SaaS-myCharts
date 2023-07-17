const validateData = require("../validate");
const {isNumber} = require("lodash");

const basicColumnParser = async (chartUserData,chartConfig) => {

    //the parser combines the data sent from frontend and
    //the chart configuration
    chartConfig.title.text = chartUserData[2][0];
    chartConfig.subtitle.text = chartUserData[2][1];
    chartConfig.yAxis.min = chartUserData[2][2];
    chartConfig.yAxis.title.text = chartUserData[2][3];
    let names = chartUserData[4];
    for (let i = 5;i<chartUserData.length;i++)
    {
        if (chartUserData[i][0])
            chartConfig.xAxis.categories.push(chartUserData[i][0])
    }
    for (let col = 1; col < chartUserData[4].length; col++) {
        let func = { name: names[col], data: [] };

        for (let row = 5; row < chartUserData.length; row++) {
            if (chartUserData[row][col] === undefined
                || chartUserData[row][col] === null)
                func.data.push(null);
            else{
                if (isNumber(chartUserData[row][col]))
                    func.data.push(chartUserData[row][col]);
                else
                    return {status:"error"};
            }
        }
        if (func.data.length !== chartConfig.xAxis.categories.length)
            return {status: "error"};
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

module.exports= basicColumnParser;