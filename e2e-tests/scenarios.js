'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /facebook when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/facebook");
  });


  describe('facebook', function() {

    beforeEach(function() {
      browser.get('index.html#/facebook');
    });


    it('should render facebook when user navigates to /facebook', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('reddit', function() {

    beforeEach(function() {
      browser.get('index.html#/reddit');
    });


    it('should render reddit when user navigates to /reddit', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
