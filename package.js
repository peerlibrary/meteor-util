Package.describe({
  name: 'peerlibrary:util',
  summary: "Meteor smart package for util node.js module",
  version: '0.5.0',
  git: 'https://github.com/peerlibrary/meteor-util.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');

  // Core dependencies.
  api.use([
    'underscore'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:ecmascript-compiler@0.5.7_2'
  ]);

  api.export('util');

  api.addFiles([
    'before.js',
    'node.js/lib/util.js',
    'after.js'
  ], 'client');

  api.addFiles([
    'server.js'
  ], 'server');
});

Package.onTest(function (api) {
  // Core dependencies.
  api.use([
    'tinytest',
    'test-helpers'
  ]);

  // Internal dependencies.
  api.use([
    'peerlibrary:util'
  ]);

  api.addFiles([
    'tests.js'
  ]);
});
