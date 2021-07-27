'use strict';

const peopleModel = require ('./people.schema');
const uuid = require('uuid').v4;

exports.handler = async (event) => {
  try {
    const {name,age} = JSON.parse(event.body);
    const id = uuid();

    let myData ={
      id:id,
      name:name,
      age:age,
    }

    const myRecord = new peopleModel (myData);
    const data = await myRecord.save();

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
