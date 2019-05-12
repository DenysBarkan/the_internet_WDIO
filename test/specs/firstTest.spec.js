var assert = require('assert');

describe('webdriver.io page', function() {
    
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        
        

        const guideBtn = $('/html/body/div[1]/div/header/div/nav/ul/li[1]/a');

        if (guideBtn.isExisting()) {
            guideBtn.click();
        } else {
            console.log('not there')
        }
        // guideBtn.waitForExist();


        const nodejsLink = $('/html/body/div[2]/div/div[2]/div/div[1]/article/div/span/p[4]/a[1]');
        nodejsLink.waitForExist();

        

    });

});