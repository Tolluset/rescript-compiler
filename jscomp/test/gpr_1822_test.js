'use strict';

var Mt = require("./mt.js");
var Block = require("../../lib/js/block.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = /* :: */[
    /* tuple */[
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return /* Eq */Block.__(0, [
                    x,
                    y
                  ]);
        })
    ],
    suites.contents
  ];
  
}

var myShape = /* Circle */Block.__(0, [10]);

var area;

area = myShape.tag ? Math.imul(10, myShape[1]) : 100 * 3.14;

eq("File \"gpr_1822_test.ml\", line 21, characters 6-13", area, 314);

Mt.from_pair_suites("Gpr_1822_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.myShape = myShape;
exports.area = area;
/* area Not a pure module */
