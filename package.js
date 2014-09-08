Package.describe({
  summary: "Meteor smart package for util node.js module",
  version: '0.2.3',
  name: 'peerlibrary:util',
  git: 'https://github.com/peerlibrary/meteor-util.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');
  api.export('util');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:util', 'tinytest', 'test-helpers'], 'server');
  api.add_files('tests.js', 'server');
});
