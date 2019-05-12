
export default class basePage {

    constructor(){
        this.baseH1 = 'h1';
        this.baseH2 = 'h2';
        this.links = '//*[@id="content"]/ul/li';
    }

    get baseHeader1(){
        return browser.$(this.baseH1);
    }

    

    get baseHeader2(){
        return browser.$(this.baseH2);
    }

    get baseLinks(){
        return browser.$$(this.links).length;
    }


    verifyUrl(url) {
        $('body').waitForVisible();
        const getUrl = browser.getUrl();
        return getUrl.should.include(url);
    }



}