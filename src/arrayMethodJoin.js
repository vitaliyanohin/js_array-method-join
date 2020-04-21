'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strLine = '';
    let sep = separator;

    for (let i = 0; i < this.length; i++) {
      if (sep === null) {
        sep = 'null';
      }

      if (i === this.length - 1) {
        strLine += this[i];
        continue;
      }

      if (this[i] === null || this[i] === undefined) {
        strLine += sep;
        continue;
      }
      strLine += this[i] + sep;
    }

    return strLine;
    // write code here
  };
}

module.exports = applyCustomJoin;
