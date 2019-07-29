#!/usr/bin/env node
"use strict";

var _diamond = _interopRequireDefault(require("./diamond"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log((0, _diamond["default"])(process.argv[2] || 'C'));