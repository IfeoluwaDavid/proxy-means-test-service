'use strict';

const express = require('express')
const bodyParser = require("body-parser")
const app = express()

const crudopsController = require('./src/controllers/crudops.controller')

app.use(bodyParser.json());
app.use('/proxy-means-test/crudops', crudopsController)

module.exports = app