const chartConfig = require("../models/ChartConfig");

const saveChart = async (userData,date,user) => {

    //save a chart for a user and add to it the date it was saved
    await Object.assign(userData,{createdOn: date, userId : user});
    let chart = new chartConfig(userData);
    console.log(chart);

    //It returns a promise!
    return (
        chart.save().
        then(()=>{
                return {status:"ok"};
        }).catch((err) =>{
            console.log(err);
            return {status:"error"};
        })

    )
};

module.exports= saveChart;