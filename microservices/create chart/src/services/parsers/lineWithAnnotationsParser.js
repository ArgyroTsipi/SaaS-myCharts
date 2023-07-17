const validateData = require("../validate");
const {isNumber} = require("lodash");


const lineWithAnnotationsParser = async (chartUserData,chartConfig) => {

    //the parser combines the data sent from frontend and
    //the chart configuration
    chartConfig.title.text = chartUserData[2][0];
    chartConfig.caption.text = chartUserData[2][1];
    chartConfig.accessibility.description = chartUserData[2][2];
    let x_mu = chartUserData[2][3];
    let y_mu = chartUserData[2][4];
    chartConfig.xAxis.title.text = chartUserData[2][5];
    chartConfig.xAxis.accessibility.rangeDescription = chartUserData[2][6];
    chartConfig.yAxis.title.text = chartUserData[2][7];
    chartConfig.yAxis.accessibility.rangeDescription = chartUserData[2][8];
    chartConfig.xAxis.labels.format += x_mu;
    chartConfig.yAxis.labels.format += y_mu;
    chartConfig.tooltip.headerFormat = chartUserData[2][5]+ ':'
        + chartConfig.tooltip.headerFormat + x_mu + '<br>';
    chartConfig.tooltip.pointFormat += y_mu;
    chartConfig.series[0].lineColor = '#800080';
    chartConfig.series[0].color = '#98FB98';
    let my_data = [];


    //Get data
    for (let row = 5;row<chartUserData.length;row++)
    {
        if (!isNumber(chartUserData[row][0]) || !isNumber(chartUserData[row][1]))
            return {status:"error"};
        my_data.push([chartUserData[row][0],chartUserData[row][1]]);
    }

    //Get Labels
    for (let col = 2;col<5;col+=2)
    {
        let row = 5;
        while (chartUserData[row][col]){
            let textl = chartUserData[row][col];
            const regex = /^\d+(\.\d+)? \d+(\.\d+)?$/; // Regular expression pattern
            const isValidFormat = regex.test(chartUserData[row][col+1]);
            if (!isValidFormat)
                return {status:"error"};
            let xl = chartUserData[row][col+1].split(' ').map(Number)[0];
            let yl = chartUserData[row][col+1].split(' ').map(Number)[1];

            let label = {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: xl,
                    y: yl
                },
                text: textl,
                allowOverlap:true
            };

            if (col===2)
                chartConfig.annotations[0].labels.push(label);
            else
                chartConfig.annotations[1].labels.push(label);
            row++;
        }

    }

    chartConfig.series[0].data = my_data
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

module.exports= lineWithAnnotationsParser;