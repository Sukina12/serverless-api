'use strict';

const peopleModel = require ('./people.schema');
const uuid = require('uuid').v4;

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    let data; 
    if (id) {
        data = await peopleModel.query('id').eq(id).exec();
        data = data[0];

    } else {
        
        data = await peopleModel.scan().exec();
    }
    return {
      statusCode :201,
      body : JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode : 500,
      error : error.message,
    }
  }
}
