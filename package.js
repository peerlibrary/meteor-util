Package.describe({
  summary: "Meteor smart package for util node.js module"
});

Package.on_use(function (api) {
  api.use('coffeescript', 'server');

  api.add_files([
    'server.coffee'
  ], 'server');
});
