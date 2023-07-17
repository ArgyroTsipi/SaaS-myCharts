const mongoose = require("mongoose");
const { Schema } = mongoose;

//Flexible Schema to support all types of charts
const ConfigSchema = new Schema({

    chartType: {
        type: String
    },
    title: {
        text: {
            type: String,
        }
    },

},{ strict: false });

const ChartConfig = mongoose.model("ChartConfig", ConfigSchema);
module.exports = ChartConfig;