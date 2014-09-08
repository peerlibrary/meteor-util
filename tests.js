Tinytest.add('util', function (test) {
  var isDefined = false;
  try {
    util;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "util is not defined");
  test.isTrue(Package['peerlibrary:util'].util, "Package.peerlibrary:util.util is not defined");

  test.equal(util.inspect({}), "{}");
});
