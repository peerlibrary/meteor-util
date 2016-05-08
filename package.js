Package.describe({
  name: 'peerlibrary:util',
  summary: "Meteor smart package for util node.js module",
  version: '0.4.0',
  git: 'https://github.com/peerlibrary/meteor-util.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3');

  // Core dependencies.
  api.use([
    'underscore',
    'ecmascript'
  ]);

  api.export('util');

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});

Package.onTest(function (api) {
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
