import staticRegister from './../utils/staticRegister';
import autocompleteValidator from './autocompleteValidator';
import dateValidator from './dateValidator';
import numericValidator from './numericValidator';
import timeValidator from './timeValidator';

var _staticRegister = staticRegister('validators'),
    register = _staticRegister.register,
    getItem = _staticRegister.getItem,
    hasItem = _staticRegister.hasItem,
    getNames = _staticRegister.getNames,
    getValues = _staticRegister.getValues;

register('autocomplete', autocompleteValidator);
register('date', dateValidator);
register('numeric', numericValidator);
register('time', timeValidator);
/**
 * Retrieve validator function.
 *
 * @param {String} name Validator identification.
 * @returns {Function} Returns validator function.
 */

function _getItem(name) {
  if (typeof name === 'function') {
    return name;
  }

  if (!hasItem(name)) {
    throw Error("No registered validator found under \"".concat(name, "\" name"));
  }

  return getItem(name);
}

export { register as registerValidator, _getItem as getValidator, hasItem as hasValidator, getNames as getRegisteredValidatorNames, getValues as getRegisteredValidators };