const chartConfig = require("../models/ChartConfig");


const getConfigMongo = async (chartType) => {
    //It returns a promise!
    return (
        chartConfig.findOne({'chartType' : chartType})
            .then(function(config)
            {
                if (config) return config;
                else throw new Error("No configuration found!");
            })
            .catch((err) =>{
                console.log('Error finding Configuration', err);
                //return {error: err.message};
            })
    )
};

module.exports= getConfigMongo;