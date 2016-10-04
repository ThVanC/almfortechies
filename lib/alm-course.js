'use strict';

exports.sum = function(a,b) {
   if( typeof a !== "number" || typeof b !== "number" ){
      return "One or more arguments are no number";
   }
   return a + b;
};
