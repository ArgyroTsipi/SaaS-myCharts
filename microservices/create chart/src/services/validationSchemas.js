const Joi = require('joi');
const validationSchemas = {
    //basicLine
    basicLine: Joi.object({
        plotOptions: Joi.object({series:Joi.object(
            {pointStart: Joi.number().required(),
                    label: Joi.object()})}),
    }).unknown(),
    //basicColumn
    basicColumn: Joi.object({
        yAxis: Joi.object({min:Joi.number()}).unknown(),
    }).unknown(),
    //network
    network: Joi.object().unknown(),
    //polar
    polar: Joi.object().unknown(),
    //dependency wheel
    dependencyWheel: Joi.object().unknown(),
    //line with annotations
    lineWithAnnotations: Joi.object().unknown()

};

module.exports = validationSchemas;