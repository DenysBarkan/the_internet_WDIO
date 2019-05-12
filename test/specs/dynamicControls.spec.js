

describe('dynamic controls and if/else test', () => {
    
    before(() => {
        browser.url('/dynamic_controls');
        browser.waitForExist('h4*=Dynamic Controls');
    });
    
    it('test remove', () => {
        
        const removeBtn = $('button=Remove');
        const addBtn = $('button=Add');

        if (!removeBtn.isVisible()) {
            addBtn.click();
            removeBtn.waitForExist();
        } else {
            removeBtn.click()
            addBtn.waitForExist();
        }

        console.log('finished');

    });




});