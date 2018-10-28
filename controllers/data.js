'use strict'

const Data = require('../models/data')

function saveData (req, res) {

  let data = new Data()
  data.captura = req.body.captura
  data.photo = req.body.photo
  data.cordenadax = req.body.cordenadax
  data.cordenaday = req.body.cordenaday


  data.save((err, dataStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ data: dataStored })
  })
}

function getData (req, res) {
  Data.find({}, (err, data) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!data) return res.status(404).send({message: 'No existe las cuentas'})
    console.log(data);

    res.send(200, { data })
  })
}


module.exports = {
  saveData,
  getData

}
