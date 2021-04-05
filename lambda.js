'use strict'
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => { 
    const result = awsServerlessExpress.proxy(server, event, context)
    return "23"
}
