'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema ({
  id: String,
  name : String,
  age : String,
});

let peopleModel = dynamoose.model ('people',peopleSchema);

module.exports = peopleModel;
