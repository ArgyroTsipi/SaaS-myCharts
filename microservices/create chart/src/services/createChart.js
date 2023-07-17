const basicColumnParser = require("./parsers/basicColumnParser")
const basicLineParser = require("./parsers/basicLineParser");
const networkParser = require("./parsers/networkParser");
const dependencyWheelParser = require("./parsers/dependencyWheelParser");
const polarParser = require("./parsers/polarParser");
const lineWithAnnotationsParser = require("./parsers/lineWithAnnotationsParser");
const getConfig = require("./getConfigMongo");


const createChart = async (jsonData,chartType) => {
    const chartCon = await getConfig(chartType);
    const chartConfig = await chartCon.toObject({ getters: true });
    await Object.assign(chartConfig,{chartName: jsonData[2][jsonData[2].length-2]});

    //for every chart type there is a parser that created the chart configuration appropriately
    switch(chartType){
        case "basicLine": return(basicLineParser(jsonData,chartConfig));
        case "basicColumn": return (basicColumnParser(jsonData,chartConfig));
        case "network": return (networkParser(jsonData,chartConfig));
        case "dependencyWheel": return (dependencyWheelParser(jsonData,chartConfig));
        case "polar": return (polarParser(jsonData,chartConfig));
        case "lineWithAnnotations": return (lineWithAnnotationsParser(jsonData,chartConfig));
        default: return ({status:"error"});
    }

};

module.exports= createChart;