import basePage from '../../pages/basePage';

describe('Smoke Test: Given as a user, I want to ensure the base page loads.', () => {
    
    const bp = new basePage();

    before('setup', () => {
        browser.url('/')
        bp.verifyUrl('https://the-internet.herokuapp.com/')
    });
    
    it('Then validate header shows', () => {
        bp.baseHeader1.should.exist;
    });

    it('Then validate sub header shows', () => {
        bp.baseHeader2.should.exist;
    });

    it('Then validate all links are displayed', () => {
        bp.baseLinks.should.equal(42);
    });
});

