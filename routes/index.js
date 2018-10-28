'use strict'

const express = require('express')
const dataCtrl = require('../controllers/data');
const api = express.Router()

//email route


api.post('/addData',dataCtrl.saveData)
api.get('/getData', dataCtrl.getData)




module.exports = api
