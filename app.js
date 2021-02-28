'use strict';

const express = require('express')
const app = express()

const crudopsController = require('./src/controllers/crudops.controller')

app.use('/proxy-means-test/crudops', crudopsController)

module.exports = app