'use strict';

const peopleModel = require ('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
     
     let deleteRecord = await peopleModel.delete({id});

    return {
      statusCode :200,
      body : JSON.stringify(deleteRecord),
    }
  } catch (error) {
    return {
      statusCode : 500,
      error : error.message,
    }
  }
}
