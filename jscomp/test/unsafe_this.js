'use strict';


function uux_this(x, y) {
  var o = this ;
  return (o.length + x | 0) + y | 0;
}

var js_obj = {
  x: 3,
  y: 32,
  bark: (function (x, y) {
      var o = this ;
      console.log([
            o.length,
            o.x,
            o.y,
            x,
            y
          ]);
      return x + y | 0;
    }),
  length: 32
};

exports.js_obj = js_obj;
exports.uux_this = uux_this;
/* uux_this Not a pure module */
