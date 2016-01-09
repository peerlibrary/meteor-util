Package.describe({
  summary: "Meteor smart package for util node.js module",
  version: '0.2.3',
  name: 'peerlibrary:util',
  git: 'https://github.com/peerlibrary/meteor-util.git'
});

Package.on_use(function (api) {
  api.use('underscore');
  api.versionsFrom('METEOR@0.9.1.1');
  api.export('util');

  api.add_files([
    'before.js',
    'node.js/lib/util.js',
    'after.js'
  ], 'client');

  api.add_files([
    'server.js'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:util', 'tinytest', 'test-helpers']);
  api.add_files('tests.js');
});
