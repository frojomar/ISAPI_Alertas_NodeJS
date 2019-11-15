'use strict';


/**
 * Alertar a conocido con ubicación del usuario y del desfibrilador
 *
 * body Alerta Información de la alerta. El campo ubicacion_desfibrilador contendrá la ubicación del desfibrilador más cercano al usuario y el conocido.
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
 * body Ubicacion Ubicación del usuario
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
 * no response value expected for this operation
 **/
exports.cancelAlerta = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

