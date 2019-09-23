/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

const AWS = require('aws-sdk');
const apiWitterGraphQLAPIIdOutput = process.env.API_WITTER_GRAPHQLAPIIDOUTPUT;

const uuidv1 = require('uuid/v1');

const dynamodb = new AWS.DynamoDB.DocumentClient();

let privateWeetTableName = 'PrivateWeet-' + apiWitterGraphQLAPIIdOutput;
let globalWeetTableName = 'GlobalWeet-' + apiWitterGraphQLAPIIdOutput;
if(process.env.ENV && process.env.ENV !== "NONE") {
  privateWeetTableName = privateWeetTableName + '-' + process.env.ENV;
  globalWeetTableName = globalWeetTableName + '-' + process.env.ENV;

}

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


app.post('/webhook', async function(req, res) {

  const apiKey = req.query.apiKey;

  if (!apiKey) {
    res.status(500).json({error: 'invalid api key'});
  }

  if (!req.body.latitude || !req.body.longitude) {
    res.status(500).json({error: 'invalid request'});
  }

  // TODO apiKeyのチェック
  const now =new Date();

  const putPrivateWeetParams = {
    TableName: privateWeetTableName,
    Item:{
      apiKey: req.query.apiKey,
      id: uuidv1(),
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      createdAt: now.toISOString(),
    }
  };

  await dynamodb.put(putPrivateWeetParams).promise();

  const putGlobalWeetParams = {
    TableName: globalWeetTableName,
    Item:{
      id: uuidv1(),
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      createdAt: now.toISOString(),
    }
  };

  await dynamodb.put(putGlobalWeetParams).promise();

  res.status(200).json({url: req.url, body: req.body})
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
