import Location from '../../../../../js/models/location.js';
import Cookie from '../../../../../js/cookie.js';
import regexs from '../../../../../js/util/regexs.js';
import { checkRequired } from '../../../../../js/util/validator.js'
import { getKeyValues, clearUndefined } from '../../../../../js/util/list.js';
import { hideElements } from '../../../../../js/util/hideElements.js';

window.addEventListener('load', start);

function start() {
  const type = Cookie.getCookie('type');
  console.log(type);
  hideElements(type);

  if (type === '1') {
    window.location.replace("./index.html");
  }
}

document.getElementById('btngua').addEventListener('click', () => {
  checkForm();
});

function checkForm() {
  const elements = getElements();
  const correct = checkRequired(elements);

  if (correct) {
    let values = getKeyValues(elements);
    values = clearUndefined(values);
    // Location.insert(Cookie.getCookie('user'), values);
  } else {
    console.log('Corregir los datos marcados');
  }
}

function getElements() {
  const elements = [];
  elements.numRooms = document.getElementById('habitaciones');
  elements.costElement = document.getElementById('costo');
  elements.genderElement = document.getElementById('genero');
  elements.streetElement = document.getElementById('calle');
  elements.extNumElement = document.getElementById('numext');
  elements.intNumElement = document.getElementById('numint');
  elements.across1Element = document.getElementById('cruce1');
  elements.across2Element = document.getElementById('cruce2');
  elements.colElement = document.getElementById('col');
  elements.postalElement = document.getElementById('cod');
  elements.commentsElement = document.getElementById('comentarios');
  elements.restrictionsElement = document.getElementById('restricciones');
  return elements;
}