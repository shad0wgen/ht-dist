"use strict";

exports.__esModule = true;
exports.default = void 0;

var C = _interopRequireWildcard(require("../constants"));

var _dictionary;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dictionary = (_dictionary = {
  languageCode: 'zh-CN'
}, _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_ABOVE, '上方插入行'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ROW_BELOW, '下方插入行'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_LEFT, '左方插入列'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_INSERT_RIGHT, '右方插入列'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_ROW, ['移除该行', '移除多行']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COLUMN, ['移除该列', '移除多列']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNDO, '撤销'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REDO, '恢复'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY, '只读'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CLEAR_COLUMN, '清空该列'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT, '对齐'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT, '左对齐'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER, '水平居中'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT, '右对齐'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY, '两端对齐'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP, '顶端对齐'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE, '垂直居中'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM, '底端对齐'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_FREEZE_COLUMN, '冻结该列'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN, '取消冻结'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS, '边框'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_TOP, '上'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_RIGHT, '右'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM, '下'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_BORDERS_LEFT, '左'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_BORDERS, '移除边框'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_ADD_COMMENT, '插入批注'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_EDIT_COMMENT, '编辑批注'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_REMOVE_COMMENT, '删除批注'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT, '只读批注'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_MERGE_CELLS, '合并'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_UNMERGE_CELLS, '取消合并'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_COPY, '复制'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_CUT, '剪切'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD, '插入子行'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD, '与母行分离'), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_COLUMN, ['隐藏该列', '隐藏多列']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_COLUMN, ['显示该列', '显示多列']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_HIDE_ROW, ['隐藏该行', '隐藏多行']), _defineProperty(_dictionary, C.CONTEXTMENU_ITEMS_SHOW_ROW, ['显示该行', '显示多行']), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NONE, '无'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EMPTY, '为空'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EMPTY, '不为空'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_EQUAL, '等于'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_EQUAL, '不等于'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEGINS_WITH, '开头是'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_ENDS_WITH, '结尾是'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_CONTAINS, '包含'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_CONTAIN, '不包含'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN, '大于'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL, '大于或等于'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN, '小于'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL, '小于或等于'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BETWEEN, '在此范围'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_NOT_BETWEEN, '不在此范围'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_AFTER, '之后'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_BEFORE, '之前'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TODAY, '今天'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_TOMORROW, '明天'), _defineProperty(_dictionary, C.FILTERS_CONDITIONS_YESTERDAY, '昨天'), _defineProperty(_dictionary, C.FILTERS_VALUES_BLANK_CELLS, '空白单元格'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_CONDITION, '按条件过滤'), _defineProperty(_dictionary, C.FILTERS_DIVS_FILTER_BY_VALUE, '按值过滤'), _defineProperty(_dictionary, C.FILTERS_LABELS_CONJUNCTION, '且'), _defineProperty(_dictionary, C.FILTERS_LABELS_DISJUNCTION, '或'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_SELECT_ALL, '全选'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CLEAR, '清除'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_OK, '确认'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_CANCEL, '取消'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH, '搜索'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_VALUE, '值'), _defineProperty(_dictionary, C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE, '第二值'), _dictionary);
var _default = dictionary;
exports.default = _default;