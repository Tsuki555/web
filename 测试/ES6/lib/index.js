"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = require("./module3");

var _module4 = _interopRequireDefault(_module3);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.fn)();
console.log(_module.str);
console.log(_module2.str1);
console.log(_module2.str2);
_module4.default.fn();
console.log(_module4.default.msg);
(0, _jquery2.default)("body").css("backgroundColor", "yellow");