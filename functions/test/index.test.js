const test = require('firebase-functions-test')('test_config.json', '../key.json');

const myFunctions = require('../index.js');
const wrapped = test.wrap(myFunctions.sendAdminNotification);