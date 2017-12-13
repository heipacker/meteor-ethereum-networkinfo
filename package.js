Package.describe({
  name: 'moac:networkinfo',
  summary: 'Moac network information package',
  version: '0.4.1',
  git: 'https://github.com/MOACChain/meteor-moac-networkinfo.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('jrudio:bluebird@3.3.1_1', ['client', 'server']);
  api.export(['NetworkInfo'], ['client', 'server']);
  api.addFiles('networkInfo.js', ['client', 'server']);
});
