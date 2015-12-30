// package metadata file for Meteor.js
var packageName = 'rshashkov:angular-meteor-angular-growl';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'Growl like notifications for angularJS projects, using bootstrap alert classes';
var gitLink = 'https://github.com/ruslanchek/angular-meteor-angular-growl';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
	name: packageName,
	version: version,
	summary: summary,
	git: gitLink,
	documentation: documentationFile
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions
	api.addFiles('src/angular-growl.js', where); // Files in use
});
