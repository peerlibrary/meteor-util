Package.describe({
  summary: "Meteor smart package for util node.js module"
});

Package.on_use(function (api) {
  api.export('util');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['util', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
