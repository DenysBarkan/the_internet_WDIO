import fileDownloadPage from '../pages/fileDownloadPage';

const assert = require('assert');
const fs = require('fs');

describe('Given: File Download test on File Download Page', () => {
    
    const fileDownPg = new fileDownloadPage();
    let fileName;

    before('setup', () => {
        browser.url('/download');
        fileDownPg.verifyUrl('download');
    });
    
    it('When I click the first download', () => {
        fileName = fileDownPg.firstDownlowdText()
        fileDownPg.clickFirstDownload()
    });

    it('Then I verify that it downloaded to the system', () => {
        browser.pause(3000)
        
        const data = fs.readdirSync('/Users/ch/Downloads/');
        assert.ok(data.includes(fileName));

    });

    after('tear down', () => {
        fs.unlinkSync(`/Users/ch/Downloads/${fileName}`)
    });
});