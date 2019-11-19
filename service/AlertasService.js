'use strict';


/**
 * Alertar a conocido con ubicación del usuario y del desfibrilador
 *
 * body Alerta 
 * no response value expected for this operation
 **/
exports.alertarConocido = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Alertar a emergencias con ubicación del usuario
 *
 * body Ubicacion Ubicacion del usuario
 * no response value expected for this operation
 **/
exports.alertarEmergencias = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cancelar la alerta actual
 *
 * returns CancelarResponse
 **/
exports.cancelAlerta = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : "alerta cancelada"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

