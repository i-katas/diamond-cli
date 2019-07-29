"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var START = 'A'.charCodeAt(0);
var LF = '\n';
var SPACE = ' ';

function _default(c) {
  return topHalfLines(c).concat(topHalfLines(c).reverse().slice(1)).join(LF);
}

function topHalfLines(c) {
  var lines = [];

  for (var current = START, end = c.charCodeAt(0); current <= end; current++) {
    lines.push(line(current, START, end));
  }

  return lines;
}

function line(c, start, end) {
  var line = [],
      margin = indents(c, start, end);
  line.push(margin);
  line.push(String.fromCharCode(c));

  if (c > START) {
    line.push(spaces(c, start, end));
    line.push(String.fromCharCode(c));
  }

  line.push(margin);
  return line.join('');
}

function spaces(c, start
/*, end*/
) {
  return SPACE.repeat((c - start) * 2 - 1);
}

function indents(c, start, end) {
  return SPACE.repeat(end - c);
}