'use strict';

const peopleModel = require ('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    let data;
     
     let deleteRecord = await peopleModel.delete({id});

     data = await peopleModel.scan().exec();

    return {
      statusCode :200,
      body : JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode : 500,
      error : error.message,
    }
  }
}
