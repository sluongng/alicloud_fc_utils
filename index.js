var r = require('request');

const jsonbin = 'https://api.jsonbin.io/b/5b45e3abefaed72daef14a98/latest';
const httpbin = 'http://httpbin.org/ip';

exports.hello = (event, context, callback) => {
  userList = [];
  
  r.get(jsonbin, (error, response, body) => {
    console.log('jsonbin userlist:', body);
    
    userList = body;
  });

  reqBody = event.body;

  resBody = {
    'success': true,
    'errorCode': '200',
    'errorMsg': '',
    'fields': {},
    'webhookFormat': {}
  };
  callback(null, body=event);
};
