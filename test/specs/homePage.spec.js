import BasePage from '../pages/BasePage'

describe('Verify Home Page elements exist: ', ()=>{
    let basePage = new BasePage();

    before('go to site', async()=>{
        await browser.url('/')
        await browser.waitForText('body')
    })

    it('should load with title', async()=>{
        await basePage.verifyTitleText()
    }, 2)

    it('should load with links', async()=>{
        await basePage.verifyNumberOfLinks()
    }, 2)

})