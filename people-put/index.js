'use strict';

const peopleModel = require ('./people.schema');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null; 
    const {name,age,gender} = JSON.parse(event.body);

    let myData ={
      id:id,
      name:name,
      age:age,
      gender:gender,
    }

    const updateRecord = await peopleModel.update (myData);

    return {
      statusCode :200,
      body : JSON.stringify(updateRecord),
    }
  } catch (error) {
    return {
      statusCode : 500,
      error : error.message,
    }
  }
}
