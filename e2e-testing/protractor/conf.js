'use strict';

// Sauce Labs Platform Configurator
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/

// Sauce Connect
// cd ~/Downloads/sc-4.3.16-osx/bin
// ./sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY

// process.env.SAUCE_USERNAME = '';
// process.env.SAUCE_ACCESS_KEY = '';

exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_ACCESS_KEY,
	// capabilities: {
  //   browserName: 'chrome'
  // },
	multiCapabilities: [{
  //  browserName: 'firefox'
  //}, {
  //  browserName: 'chrome'
  //}, {
  //   browserName: 'phantomjs'
	//}, {
		browserName: 'iphone',
		platform: 'OS X 10.9',
		version: '7.1',
		deviceName: 'iPad Retina (64-bit)',
		deviceOrientation: 'portrait'
	}],
  suites: {
		all: ['spec.js']
	},
	rootElement: 'main',
}