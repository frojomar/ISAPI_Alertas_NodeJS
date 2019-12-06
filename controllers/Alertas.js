'use strict';

var utils = require('../utils/writer.js');
var Alertas = require('../service/AlertasService');

const net = require('net');
const API_KEY = "edff5a27-c65f-443e-8e69-88ff29994b57";

module.exports.alertarConocido = function alertarConocido (req, res, next) {

  var timeI = new Date().getTime();
  sendMetrica("alertas.alertarConocido.numeroPeticiones", 1);

  var body = req.swagger.params['body'];
  Alertas.alertarConocido(body)
    .then(function (response) {
      utils.writeJson(res, response);
      simularCodigo("alertas.alertarConocido");
      var timeF = new Date().getTime();
      sendMetrica("alertas.alertarConocido.tiempoEjecucion", timeF-timeI);


    })
    .catch(function (response) {
      utils.writeJson(res, response);
      console.log(res.statusCode);
      sendMetrica("alertas.alertarConocido."+statusCode, 1);

    });
};

module.exports.alertarEmergencias = function alertarEmergencias (req, res, next) {
  var timeI = new Date().getTime();
  sendMetrica("alertas.alertar112.numeroPeticiones", 1);
  var body = req.swagger.params['body'];
  Alertas.alertarEmergencias(body)
    .then(function (response) {
      utils.writeJson(res, response);
      simularCodigo("alertas.alertar112");
      var timeF = new Date().getTime();
      sendMetrica("alertas.alertar112.tiempoEjecucion", timeF-timeI);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      sendMetrica("alertas.alertar112."+statusCode, 1);
    });
};

module.exports.cancelAlerta = function cancelAlerta (req, res, next) {
  var timeI = new Date().getTime();
  sendMetrica("alertas.cancelarAlerta.numeroPeticiones", 1);
  Alertas.cancelAlerta()
    .then(function (response) {
      utils.writeJson(res, response);
      simularCodigo("alertas.cancelarAlerta");
      var timeF = new Date().getTime();
      sendMetrica("alertas.cancelarAlerta.tiempoEjecucion", timeF-timeI);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
      sendMetrica("alertas.cancelarAlerta."+statusCode, 1);
    });
};


async function sendMetrica(metrica, value){
  var socket = net.createConnection(2003, "carbon.hostedgraphite.com", function() {
    socket.write(API_KEY + "." +metrica+" "+value+" \n");
    socket.end();
  });
}

function simularCodigo(endpoint){
  var random = getRandomInt(0,9);

  switch(random){
    case 0: 
    case 1:
      sendMetrica(endpoint+".500", 1); //simular 500 con un 20% de probabilidad
      break;
    case 2:
    case 3:
      sendMetrica(endpoint+".404", 1); //simular 404 con un 20% de probabilidad
  }
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}