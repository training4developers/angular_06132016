// spec.js
describe('Angular.js Demo App', function() {

  it('should have a title', function() {

		browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Angular.js Demo App');

  });

	// exercise #1 - move the browser.get function call to a before each

});
