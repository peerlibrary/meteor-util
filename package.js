Package.describe({
  summary: "Meteor smart package for util node.js module",
  version: '0.2.3',
  name: 'mrt:util',
  git: 'https://github.com/peerlibrary/meteor-util.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:util@0.2.3');
});
