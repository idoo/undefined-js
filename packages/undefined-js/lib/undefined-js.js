'use strict';

module.exports = undefinedJs;

function undefinedJs(value) {
  return typeof value === 'undefined';
}

function hasSomeValue() {
  // TODO: add implementation for that cases
  // false
  // 0
  // ""
  // NaN
  // null
  // undefined
}

function slowCheckForUndefined(value) {
  // TODO: use async/await here
  return setTimeout(function(){ undefinedJs(value) }, 1000);
}
