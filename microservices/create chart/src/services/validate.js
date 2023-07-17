const validationSchemas = require('./validationSchemas');
const validateData = (jsonData) => {
    //for every chart type there is a corresponding schema
    const chartType = jsonData.chartType;
    const chartValidationSchema = validationSchemas[chartType];

    //the data the user provided must comply with the chart's schema
    if (!chartValidationSchema) {
        throw new Error(`Invalid chart type: ${chartType}`);
    }

    const { error } = chartValidationSchema.validate(jsonData);
    if (error) {
        throw new Error(`Invalid chart data: ${error.message}`);
    }

};

module.exports= validateData;