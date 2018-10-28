'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DataSchema = Schema({

  captura:{type:String},
  photo:{type:String},
  cordenadax:{type: Number},
  cordenaday:{type: Number},
  descripcion: {type: String},
  estado: {type: String},
  tipo:{type: String}


})

module.exports = mongoose.model('Data', DataSchema)
