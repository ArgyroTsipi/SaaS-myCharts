const chartConfig = require('../models/ChartConfig');
const getCount = async (user) => {
    //It returns a promise!
    return (
        //return the number of charts the user has saved
        chartConfig.count({userId: user})
            .then(function(count)
            {
                console.log(count);
                return count;
            })
            .catch((err) =>{
                console.log('Error counting Home', err);
                //return {error: err.message};
            })
    )
};

module.exports= getCount;