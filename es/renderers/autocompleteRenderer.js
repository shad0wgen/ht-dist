import { addClass, hasClass } from './../helpers/dom/element';
import EventManager from './../eventManager';
import { CellCoords } from './../3rdparty/walkontable/src';
import { getRenderer } from './index';
var clonableWRAPPER = document.createElement('DIV');
clonableWRAPPER.className = 'htAutocompleteWrapper';
var clonableARROW = document.createElement('DIV');
clonableARROW.className = 'htAutocompleteArrow'; // workaround for https://github.com/handsontable/handsontable/issues/1946
// this is faster than innerHTML. See: https://github.com/handsontable/handsontable/wiki/JavaScript-&-DOM-performance-tips

clonableARROW.appendChild(document.createTextNode(String.fromCharCode(9660)));
/**
 * Autocomplete renderer
 *
 * @private
 * @renderer AutocompleteRenderer
 * @param {Object} instance Handsontable instance
 * @param {Element} TD Table cell where to render
 * @param {Number} row
 * @param {Number} col
 * @param {String|Number} prop Row object property name
 * @param value Value to render (remember to escape unsafe HTML before inserting to DOM!)
 * @param {Object} cellProperties Cell properites (shared by cell renderer and editor)
 */

function autocompleteRenderer(instance, TD, row, col, prop, value, cellProperties) {
  var rendererType = cellProperties.allowHtml ? 'html' : 'text';
  var ARROW = clonableARROW.cloneNode(true); // this is faster than createElement

  for (var _len = arguments.length, args = new Array(_len > 7 ? _len - 7 : 0), _key = 7; _key < _len; _key++) {
    args[_key - 7] = arguments[_key];
  }

  getRenderer(rendererType).apply(this, [instance, TD, row, col, prop, value, cellProperties].concat(args));

  if (!TD.firstChild) {
    // http://jsperf.com/empty-node-if-needed
    // otherwise empty fields appear borderless in demo/renderers.html (IE)
    TD.appendChild(document.createTextNode(String.fromCharCode(160))); // workaround for https://github.com/handsontable/handsontable/issues/1946
    // this is faster than innerHTML. See: https://github.com/handsontable/handsontable/wiki/JavaScript-&-DOM-performance-tips
  }

  TD.insertBefore(ARROW, TD.firstChild);
  addClass(TD, 'htAutocomplete');

  if (!instance.acArrowListener) {
    var eventManager = new EventManager(instance); // not very elegant but easy and fast

    instance.acArrowListener = function (event) {
      if (hasClass(event.target, 'htAutocompleteArrow')) {
        instance.view.wt.getSetting('onCellDblClick', null, new CellCoords(row, col), TD);
      }
    };

    eventManager.addEventListener(instance.rootElement, 'mousedown', instance.acArrowListener); // We need to unbind the listener after the table has been destroyed

    instance.addHookOnce('afterDestroy', function () {
      eventManager.destroy();
    });
  }
}

export default autocompleteRenderer;