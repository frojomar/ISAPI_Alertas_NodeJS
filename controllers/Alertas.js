'use strict';

var utils = require('../utils/writer.js');
var Alertas = require('../service/AlertasService');

module.exports.alertarConocido = function alertarConocido (req, res, next) {
  var body = req.swagger.params['body'].value;
  Alertas.alertarConocido(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.alertarEmergencias = function alertarEmergencias (req, res, next) {
  var body = req.swagger.params['body'].value;
  Alertas.alertarEmergencias(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cancelAlerta = function cancelAlerta (req, res, next) {
  Alertas.cancelAlerta()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
