'use strict';

const peopleModel = require('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    let data;
    if (id) {
      const results = await peopleModel.query('id').eq(id).exec();
      data = results[0];

    } else {
      data = await peopleModel.scan().exec();
    }
    return {
      statusCode: 201,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      error: error.message,
    }
  }
}
