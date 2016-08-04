util = exports;

// util.print, util.puts, util.debug, util.error already throw an error through "deprecate".
util._errnoException = util.debuglog = function () {
  throw new Error("Not implemented.");
};
