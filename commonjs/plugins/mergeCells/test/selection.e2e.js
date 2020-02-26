"use strict";

describe('MergeCells Selection', function () {
  var id = 'testContainer';
  beforeEach(function () {
    this.$container = $("<div id=\"".concat(id, "\"></div>")).appendTo('body');
  });
  afterEach(function () {
    if (this.$container) {
      destroy();
      this.$container.remove();
    }
  });
  it('should leave the partially selected merged cells white (or any initial color), when selecting entire columns or rows', function () {
    handsontable({
      data: Handsontable.helper.createSpreadsheetObjectData(10, 5),
      mergeCells: [{
        row: 0,
        col: 0,
        rowspan: 3,
        colspan: 3
      }]
    });
    selectColumns(0, 1);
    var mergedCell = getCell(0, 0);
    expect(getComputedStyle(mergedCell, ':before').opacity).toEqual('0');
    selectRows(0, 1);
    expect(getComputedStyle(mergedCell, ':before').opacity).toEqual('0');
  });
  it('should leave the partially selected merged cells with their initial color, when selecting entire columns or rows ' + '(when the merged cells was previously fully selected)', function () {
    handsontable({
      data: Handsontable.helper.createSpreadsheetObjectData(10, 5),
      mergeCells: [{
        row: 0,
        col: 0,
        rowspan: 3,
        colspan: 3
      }],
      rowHeaders: true
    });
    selectColumns(0, 2);
    var mergedCell = getCell(0, 0);
    var selectedCellBackground = getComputedStyle(mergedCell, ':before').backgroundColor;
    var selectedCellOpacity = getComputedStyle(mergedCell, ':before').opacity;
    var firstRowHeader = getCell(0, -1, true);
    keyDown('ctrl');
    $(firstRowHeader).simulate('mousedown');
    $(firstRowHeader).simulate('mouseup');
    expect(getComputedStyle(mergedCell, ':before').backgroundColor).toEqual(selectedCellBackground);
    expect(getComputedStyle(mergedCell, ':before').opacity).toEqual(selectedCellOpacity);
  });
  it('should make the entirely selected merged cells have the same background color as a regular selected area, when ' + 'selecting entire columns or rows', function () {
    handsontable({
      data: Handsontable.helper.createSpreadsheetObjectData(10, 6),
      mergeCells: [{
        row: 0,
        col: 0,
        rowspan: 3,
        colspan: 3
      }]
    });
    selectCell(4, 4, 5, 5);
    var selectedCell = getCell(4, 4);
    var selectedCellBackground = getComputedStyle(selectedCell, ':before').backgroundColor;
    var selectedCellOpacity = getComputedStyle(selectedCell, ':before').opacity;
    selectColumns(0, 2);
    var mergedCell = getCell(0, 0);
    expect(getComputedStyle(mergedCell, ':before').backgroundColor).toEqual(selectedCellBackground);
    expect(getComputedStyle(mergedCell, ':before').opacity).toEqual(selectedCellOpacity);
    selectRows(0, 2);
    expect(getComputedStyle(mergedCell, ':before').backgroundColor).toEqual(selectedCellBackground);
    expect(getComputedStyle(mergedCell, ':before').opacity).toEqual(selectedCellOpacity);
  });
  it('should make the entirely selected merged cells have the same background color as a regular selected area, when ' + 'selecting entire columns or rows (using multiple selection layers)', function () {
    handsontable({
      data: Handsontable.helper.createSpreadsheetObjectData(10, 5),
      mergeCells: [{
        row: 0,
        col: 0,
        rowspan: 3,
        colspan: 3
      }],
      rowHeaders: true,
      colHeaders: true
    }); // sample the selected background

    selectCells([[5, 1, 5, 2]]);
    var selectedCell = getCell(5, 1);
    var selectedCellBackground = getComputedStyle(selectedCell, ':before').backgroundColor;
    var selectedCellOpacity = getComputedStyle(selectedCell, ':before').opacity;
    var mergedCell = getCell(0, 0);
    var rowHeaders = [getCell(0, -1, true), getCell(1, -1, true), getCell(2, -1, true), getCell(3, -1, true)];
    var columnHeaders = [spec().$container.find('.ht_clone_top tr:eq(0) th:eq(1)'), spec().$container.find('.ht_clone_top tr:eq(0) th:eq(2)'), spec().$container.find('.ht_clone_top tr:eq(0) th:eq(3)'), spec().$container.find('.ht_clone_top tr:eq(0) th:eq(4)')];
    deselectCell();
    keyDown('ctrl');
    $(rowHeaders[0]).simulate('mousedown');
    $(rowHeaders[1]).simulate('mouseover');
    $(rowHeaders[1]).simulate('mouseup');
    $(rowHeaders[2]).simulate('mousedown');
    $(rowHeaders[2]).simulate('mouseover');
    $(rowHeaders[2]).simulate('mouseup');
    keyUp('ctrl');
    expect(getComputedStyle(mergedCell, ':before').backgroundColor).toEqual(selectedCellBackground);
    expect(getComputedStyle(mergedCell, ':before').opacity).toEqual(selectedCellOpacity);
    deselectCell();
    keyDown('ctrl');
    $(columnHeaders[0]).simulate('mousedown');
    $(columnHeaders[1]).simulate('mouseover');
    $(columnHeaders[1]).simulate('mouseup');
    $(columnHeaders[2]).simulate('mousedown');
    $(columnHeaders[3]).simulate('mouseover');
    $(columnHeaders[3]).simulate('mouseup');
    keyUp('ctrl');
    expect(getComputedStyle(mergedCell, ':before').backgroundColor).toEqual(selectedCellBackground);
    expect(getComputedStyle(mergedCell, ':before').opacity).toEqual(selectedCellOpacity);
  });
  it('should make the entirely selected merged cells have the same background color as a regular selected area, when ' + 'selecting entire columns or rows (when the merged cells was previously fully selected)', function () {
    handsontable({
      data: Handsontable.helper.createSpreadsheetObjectData(10, 5),
      mergeCells: [{
        row: 0,
        col: 0,
        rowspan: 3,
        colspan: 3
      }],
      rowHeaders: true
    }); // sample the double-selected background

    selectCells([[5, 1, 5, 2], [5, 1, 5, 2]]);
    var selectedCell = getCell(5, 1);
    var selectedCellBackground = getComputedStyle(selectedCell, ':before').backgroundColor;
    var selectedCellOpacity = getComputedStyle(selectedCell, ':before').opacity;
    selectColumns(0, 2);
    var mergedCell = getCell(0, 0);
    var firstRowHeader = getCell(0, -1, true);
    var thirdRowHeader = getCell(2, -1, true);
    keyDown('ctrl');
    $(firstRowHeader).simulate('mousedown');
    $(thirdRowHeader).simulate('mouseover');
    $(thirdRowHeader).simulate('mouseup');
    expect(getComputedStyle(mergedCell, ':before').backgroundColor).toEqual(selectedCellBackground);
    expect(getComputedStyle(mergedCell, ':before').opacity).toEqual(selectedCellOpacity);
  });
});