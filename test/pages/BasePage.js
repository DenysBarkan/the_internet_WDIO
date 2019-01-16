
export default class BasePage {
    constructor() {
        this.title = 'h1*=Welcome';
        this.subTitle = 'h2*=Available';
    }

    async verifyTitleText() {
        await $(this.title).getText().should.eventually.equal('Welcome to the-internet')
        await $(this.subTitle).getText().should.eventually.equal('Available Examples')
    }

    async verifyNumberOfLinks() {
        await $('ul').$$('li').should.eventually.have.lengthOf(39)
    }

    // Navigation functions
    async loadSite() {
        await browser.url('/')
        await browser.waitForText('body')
    }

    async loadBrokenImagesPage() {
        await browser.url('/broken_images')
        await browser.waitForText('h3=Broken Images')
    }
}